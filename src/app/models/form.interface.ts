export interface FormElement {
  type: 'textbox' | 'textarea' | 'button';
  name: string;
  id: string;
  border: { color: string; size: string };

  // ✅ Optional properties for specific element types
  placeholder?: string; // Only for textbox
  caption?: string; // Only for button
  rows?: number; // Only for textarea
  cols?: number; // Only for textarea
}
