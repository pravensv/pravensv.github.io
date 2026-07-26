export type ProjectTheme = {
  id: string;
  name: string;
  accent: string;
  accentContrast: string;
  surface: string;
  text: string;
  muted: string;
  border: string;
  shadow: string;
};

export const themeOptions: ProjectTheme[] = [
  {
    id: 'coral',
    name: 'Coral',
    accent: '#f43f5e',
    accentContrast: '#fff7ed',
    surface: '#fff1f2',
    text: '#111827',
    muted: '#6b7280',
    border: '#fecdd3',
    shadow: 'rgba(244, 63, 94, 0.18)',
  },
  {
    id: 'cyan',
    name: 'Cyan',
    accent: '#06b6d4',
    accentContrast: '#f8fafc',
    surface: '#ecfeff',
    text: '#0f172a',
    muted: '#475569',
    border: '#a5f3fc',
    shadow: 'rgba(6, 182, 212, 0.18)',
  },
  {
    id: 'violet',
    name: 'Violet',
    accent: '#8b5cf6',
    accentContrast: '#fdf2f8',
    surface: '#f5f3ff',
    text: '#1f2937',
    muted: '#4b5563',
    border: '#ddd6fe',
    shadow: 'rgba(139, 92, 246, 0.18)',
  },
];

export const defaultTheme = themeOptions[0];
