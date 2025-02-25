import React from "react";
import { cn } from "../../lib/utils";

interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
  cols?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  gap?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 8 | 10 | 12 | 16;
  colsSm?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  colsMd?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  colsLg?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
}

const Grid = React.forwardRef<HTMLDivElement, GridProps>(
  ({ className, cols = 1, gap = 4, colsSm, colsMd, colsLg, ...props }, ref) => {
    const getColsClass = (cols: number) => {
      return `grid-cols-${cols}`;
    };

    const getGapClass = (gap: number) => {
      return `gap-${gap}`;
    };

    return (
      <div
        ref={ref}
        className={cn(
          "grid",
          getColsClass(cols),
          getGapClass(gap),
          colsSm && `sm:${getColsClass(colsSm)}`,
          colsMd && `md:${getColsClass(colsMd)}`,
          colsLg && `lg:${getColsClass(colsLg)}`,
          className
        )}
        {...props}
      />
    );
  }
);
Grid.displayName = "Grid";

interface GridItemProps extends React.HTMLAttributes<HTMLDivElement> {
  span?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  spanSm?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  spanMd?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  spanLg?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
}

const GridItem = React.forwardRef<HTMLDivElement, GridItemProps>(
  ({ className, span, spanSm, spanMd, spanLg, ...props }, ref) => {
    const getSpanClass = (span: number) => {
      return `col-span-${span}`;
    };

    return (
      <div
        ref={ref}
        className={cn(
          span && getSpanClass(span),
          spanSm && `sm:${getSpanClass(spanSm)}`,
          spanMd && `md:${getSpanClass(spanMd)}`,
          spanLg && `lg:${getSpanClass(spanLg)}`,
          className
        )}
        {...props}
      />
    );
  }
);
GridItem.displayName = "GridItem";

export { Grid, GridItem };