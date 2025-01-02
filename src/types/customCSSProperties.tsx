import { CSSProperties } from "react";

export interface CustomCSSProperties extends CSSProperties {
  "--char-count"?: number;
  "--swiper-pagination-color"?: string;
  "--swiper-pagination-bullet-inactive-color"?: string;
  "--swiper-pagination-bullet-size"?: string;
  "--swiper-pagination-bottom"?: string;
}
