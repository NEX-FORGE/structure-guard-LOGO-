export interface ToastMessage {
  id: string;
  title: string;
  message: string;
  type?: 'success' | 'info' | 'download';
}

export interface BrandColor {
  name: string;
  role: string;
  hex: string;
  rgb: string;
  bgClass: string;
  textClass: string;
  borderClass: string;
  description: string;
}

export interface AssetInfo {
  id: string;
  title: string;
  filename: string;
  format: string;
  dimensions: string;
  size: string;
  aspectRatio: string;
  description: string;
  url: string;
  isPrimary?: boolean;
}
