import { Paragraph } from "./paragraph";

export class Header {
  hasNumberings = false;
  children: Paragraph[] = [];

  addParagraph(p: Paragraph) {
    if (p.hasNumberings) {
      this.hasNumberings = true;
    }
    this.children.push(p);
    return this;
  }
}