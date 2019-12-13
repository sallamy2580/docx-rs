/* tslint:disable */
export const memory: WebAssembly.Memory;
export function __wbg_run_free(a: number): void;
export function createRun(): number;
export function run_add_text(a: number, b: number, c: number): number;
export function run_add_delete_text(a: number, b: number, c: number): number;
export function run_add_tab(a: number): number;
export function run_add_break(a: number, b: number): number;
export function run_size(a: number, b: number): number;
export function run_color(a: number, b: number, c: number): number;
export function run_highlight(a: number, b: number, c: number): number;
export function run_bold(a: number): number;
export function run_italic(a: number): number;
export function run_underline(a: number, b: number, c: number): number;
export function __wbg_comment_free(a: number): void;
export function createComment(a: number): number;
export function comment_author(a: number, b: number, c: number): number;
export function comment_date(a: number, b: number, c: number): number;
export function comment_paragraph(a: number, b: number): number;
export function comment_id(a: number): number;
export function __wbg_tablecell_free(a: number): void;
export function createTableCell(): number;
export function tablecell_add_paragraph(a: number, b: number): number;
export function tablecell_vertical_merge(a: number, b: number): number;
export function tablecell_grid_span(a: number, b: number): number;
export function __wbg_tablerow_free(a: number): void;
export function createTableRow(): number;
export function tablerow_add_cell(a: number, b: number): number;
export function __wbg_docx_free(a: number): void;
export function createDocx(): number;
export function docx_add_paragraph(a: number, b: number): number;
export function docx_add_table(a: number, b: number): number;
export function docx_add_numbering(a: number, b: number): number;
export function docx_build(a: number, b: number): void;
export function __wbg_level_free(a: number): void;
export function createLevel(a: number, b: number, c: number, d: number, e: number, f: number, g: number, h: number): number;
export function level_indent(a: number, b: number, c: number, d: number, e: number): number;
export function __wbg_insert_free(a: number): void;
export function createInsert(): number;
export function __wbg_table_free(a: number): void;
export function createTable(): number;
export function table_add_row(a: number, b: number): number;
export function table_set_grid(a: number, b: number, c: number): number;
export function table_indent(a: number, b: number): number;
export function table_align(a: number, b: number): number;
export function __wbg_numbering_free(a: number): void;
export function createNumbering(a: number): number;
export function numbering_add_level(a: number, b: number): number;
export function __wbg_delete_free(a: number): void;
export function createDelete(): number;
export function __wbg_paragraph_free(a: number): void;
export function createParagraph(): number;
export function paragraph_add_run(a: number, b: number): number;
export function paragraph_add_insert(a: number, b: number): number;
export function paragraph_add_delete(a: number, b: number): number;
export function paragraph_add_bookmark_start(a: number, b: number, c: number, d: number, e: number): number;
export function paragraph_add_bookmark_end(a: number, b: number, c: number): number;
export function paragraph_add_comment_start(a: number, b: number): number;
export function paragraph_add_comment_end(a: number, b: number): number;
export function paragraph_align(a: number, b: number): number;
export function paragraph_style(a: number, b: number, c: number): number;
export function paragraph_indent(a: number, b: number, c: number, d: number, e: number): number;
export function paragraph_numbering(a: number, b: number, c: number): number;
export function __wbindgen_malloc(a: number): number;
export function __wbindgen_realloc(a: number, b: number, c: number): number;
export function __wbindgen_free(a: number, b: number): void;
