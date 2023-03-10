const editor = document.getElementById('editor');

editor.addEventListener('input', () => {
    localStorage.editor = editor.value;
});

document.getElementById('clear').addEventListener('click', () => {
    editor.value = '';
    localStorage.clear();
});

if (localStorage.editor) {
    editor.value = localStorage.editor;
}