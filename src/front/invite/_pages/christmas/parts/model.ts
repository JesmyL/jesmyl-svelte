export interface PagePartProps extends StockImageDeepProps {
  partStyle: string;
}

export interface StockImageDeepProps {
  onLoad: () => void;
}

export interface StockImageProps extends StockImageDeepProps {
  src: string;
  className?: string;
}
