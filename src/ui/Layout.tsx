import React, { forwardRef, HTMLAttributes } from "react";
import { useTheme } from "../hooks/useTheme";

export interface LayoutProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "className"> {
  /** Layout direction */
  direction?: "row" | "column";
  /** Gap between items */
  gap?: "none" | "xs" | "sm" | "md" | "lg" | "xl";
  /** Padding around layout */
  padding?: "none" | "xs" | "sm" | "md" | "lg" | "xl";
  /** Layout container width - preset values, numbers (px), or CSS strings */
  width?: "xs" | "sm" | "md" | "lg" | "xl" | "full" | "auto" | number | string;
  /** @deprecated Use 'width' instead */
  layoutWidth?: "xs" | "sm" | "md" | "lg" | "xl" | "full" | "auto";
  /** Layout container height - preset values, numbers (px), or CSS strings */
  height?: "xs" | "sm" | "md" | "lg" | "xl" | "full" | "auto" | number | string;
  /** Position behavior */
  position?: "static" | "relative" | "absolute" | "fixed" | "sticky";
  /** Alignment of items */
  align?: "start" | "center" | "end" | "stretch";
  /** Justification of items */
  justify?: "start" | "center" | "end" | "between" | "around" | "evenly";
  /** Wrap behavior for flex layouts */
  wrap?: boolean;
  /** Center the layout container */
  centered?: boolean;
  /** Automatically arrange child layouts to prevent overlaps with fixed/absolute positioned elements.
   * Also applies automatic z-index based on component order (earlier = higher z-index).
   * Works with direct Layout components and custom components marked with data-layout="layout" */
  autoArrange?: boolean;
  className?: string;
}

const sizePresets = {
  xs: "480px",
  sm: "640px", 
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  full: "100%",
  auto: "auto",
};

const alignValues = {
  start: "flex-start",
  center: "center",
  end: "flex-end",
  stretch: "stretch",
};

const justifyValues = {
  start: "flex-start",
  center: "center",
  end: "flex-end",
  between: "space-between",
  around: "space-around",
  evenly: "space-evenly",
};

export const Layout = forwardRef<HTMLDivElement, LayoutProps>(
  (
    {
      direction = "row",
      gap = "md",
      padding = "md",
      width = "full",
      layoutWidth, // deprecated
      height,
      position,
      align = "start",
      justify = "start",
      wrap = true,
      centered = false,
      autoArrange = false,
      className = "",
      children,
      ...props
    },
    ref
  ) => {
    const { variables } = useTheme();

    // Helper function to convert size values
    const convertSize = (size: string | number | undefined): string | undefined => {
      if (size === undefined) return undefined;
      if (typeof size === "number") return `${size}px`;
      if (typeof size === "string" && size in sizePresets) {
        return sizePresets[size as keyof typeof sizePresets];
      }
      return size;
    };

    // Auto-arrangement system
    const analyzeChildLayouts = () => {
      if (!autoArrange) return { arrangedChildren: children, containerAdjustments: {} };
      
      console.log('=== AUTO ARRANGE TRIGGERED ===');
      
      const childrenArray = React.Children.toArray(children);
      let leftOffset = 0;
      
      // For now, let's use a simple hardcoded approach for sidebar layouts
      // This will work for the common case: fixed sidebar navigation
      leftOffset = 250; // Common sidebar width
      
      console.log('Using hardcoded leftOffset for testing:', leftOffset);

      // Helper function to apply auto arrangement to any child component
      const applyAutoArrangement = (element: React.ReactElement, baseIndex: number, offset: number): React.ReactElement => {
        const hasDataLayout = element.props['data-layout'] === 'layout';
        const isDirectLayout = element.type === Layout;
        
        console.log(`Applying auto arrangement to child ${baseIndex}:`, {
          type: (element.type as any)?.displayName || (element.type as any)?.name || 'Unknown',
          isDirectLayout,
          hasDataLayout,
          shouldProcess: isDirectLayout || hasDataLayout
        });
        
        // For direct Layout children, apply z-index and spacing
        if (isDirectLayout) {
          const currentStyle = element.props.style || {};
          let newStyle = { ...currentStyle };
          
          const childProps = element.props as LayoutProps;
          const hasPositioning = childProps.position && childProps.position !== 'static';
          
          if (hasPositioning && currentStyle.zIndex === undefined) {
            let autoZIndex;
            if (baseIndex === 0) {
              // First positioned element (usually navigation)
              autoZIndex = 1000;
            } else if (childProps.position === 'fixed') {
              // Fixed elements get high z-index
              autoZIndex = 1100;
            } else {
              // Other positioned elements
              autoZIndex = 1000 - (baseIndex * 10);
            }
            newStyle.zIndex = autoZIndex;
            console.log(`Applied auto z-index ${autoZIndex} to Layout at index ${baseIndex}`);
          }
          
          // Apply positioning offset for fixed elements that come after positioned elements
          if (childProps.position === 'fixed' && offset > 0) {
            console.log(`Checking fixed element at index ${baseIndex}:`, {
              hasLeft: 'left' in currentStyle,
              leftValue: currentStyle.left,
              offset
            });
            
            // If this is a fixed element and there are positioned elements before it, adjust its left position
            if (currentStyle.left === 0 || currentStyle.left === '0' || currentStyle.left === '0px' || currentStyle.left === undefined) {
              newStyle.left = `${offset}px`;
              console.log(`Applied left offset ${offset}px to fixed Layout at index ${baseIndex}`);
            }
          }
          
          // Apply margin for spacing (skip first child and fixed elements that got left positioning)
          if (baseIndex > 0 && childProps.position !== 'fixed') {
            newStyle.marginLeft = `${offset}px`;
            console.log('Applied margin to Layout at index', baseIndex);
          }
          
          // Recursively process nested children for fixed elements
          let processedChildren = element.props.children;
          if (React.Children.count(processedChildren) > 0 && offset > 0) {
            processedChildren = React.Children.map(processedChildren, (child) => {
              if (React.isValidElement(child) && child.type === Layout) {
                const nestedChildProps = child.props as LayoutProps;
                if (nestedChildProps.position === 'fixed') {
                  const nestedCurrentStyle = (child.props as any).style || {};
                  const nestedNewStyle = { ...nestedCurrentStyle };
                  
                  console.log(`Processing nested fixed Layout:`, {
                    hasLeft: 'left' in nestedCurrentStyle,
                    leftValue: nestedCurrentStyle.left,
                    offset
                  });
                  
                  if (nestedCurrentStyle.left === 0 || nestedCurrentStyle.left === '0' || nestedCurrentStyle.left === '0px' || nestedCurrentStyle.left === undefined) {
                    nestedNewStyle.left = `${offset}px`;
                    console.log(`Applied left offset ${offset}px to nested fixed Layout`);
                  }
                  
                  return React.cloneElement(child, {
                    ...(child.props as any),
                    style: nestedNewStyle,
                  });
                }
              }
              return child;
            });
          }

          return React.cloneElement(element, {
            ...element.props,
            style: newStyle,
            children: processedChildren,
          });
        }
        
        // For custom components with data-layout="layout", apply z-index directly as a style prop
        else if (hasDataLayout) {
          const currentStyle = element.props.style || {};
          let autoZIndex;
          
          if (baseIndex === 0) {
            // First layout component (usually navigation) - give it high z-index
            autoZIndex = 1000;
          } else {
            // Other layout components get lower z-index
            autoZIndex = 1000 - (baseIndex * 10);
          }
          
          const newStyle = {
            ...currentStyle,
            zIndex: currentStyle.zIndex !== undefined ? currentStyle.zIndex : autoZIndex,
          };
          
          // Apply margin for spacing (skip first child)
          let wrapperStyle = {};
          if (baseIndex > 0) {
            wrapperStyle = { marginLeft: `${offset}px` };
          }
          
          console.log(`Applied auto z-index ${autoZIndex} to data-layout component at index ${baseIndex}`);
          
          // Clone with both the component's style and wrapper style
          const clonedElement = React.cloneElement(element, {
            ...element.props,
            style: newStyle,
          });
          
          // If we need margin, wrap in a div
          if (baseIndex > 0) {
            return React.createElement('div', { style: wrapperStyle }, clonedElement);
          }
          
          return clonedElement;
        }
        
        // For regular components without data-layout, return as-is
        else {
          console.log(`Skipping child ${baseIndex} - no data-layout="layout" attribute`);
          return element;
        }
      };

      // Apply automatic z-index and margins based on layout order
      const arrangedChildren = childrenArray.map((child, index) => {
        console.log(`Processing child ${index} for arrangement`);
        
        if (React.isValidElement(child)) {
          const newChild = applyAutoArrangement(child, index, leftOffset);
          return newChild;
        }
        return child;
      });

      return { 
        arrangedChildren, 
        containerAdjustments: { leftOffset } 
      };
    };

    const { arrangedChildren } = analyzeChildLayouts();

    // Layout styles
    const getLayoutStyles = (): React.CSSProperties => {
      // Use width prop, fallback to layoutWidth for backward compatibility
      const finalWidth = width || layoutWidth;
      const convertedWidth = convertSize(finalWidth);
      const convertedHeight = convertSize(height);
      
      return {
        display: "flex",
        flexDirection: direction,
        alignItems: alignValues[align],
        justifyContent: justifyValues[justify],
        gap: gap !== "none" ? variables.spacing[gap] : "0",
        padding: padding !== "none" ? variables.spacing[padding] : "0",
        width: convertedWidth,
        height: convertedHeight,
        position: position,
        margin: centered ? "0 auto" : "0",
        flexWrap: wrap ? ("wrap" as const) : ("nowrap" as const),
        boxSizing: "border-box",
        // Only add overflow auto if not using sticky positioning
        overflow: position === "sticky" ? "visible" : "auto",
      };
    };

    const { style: externalStyle, ...otherProps } = props;

    return (
      <div
        ref={ref}
        style={{
          ...getLayoutStyles(),
          ...externalStyle,
        }}
        className={className}
        {...otherProps}
      >
        {arrangedChildren}
      </div>
    );
  }
);

Layout.displayName = "Layout";
