import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	console.log('Extension "consoleX" activated!');

	let disposable = vscode.commands.registerCommand('extension.insertConsoleLogWithSelection', () => {
		console.log('Command executed!');

		const editor = vscode.window.activeTextEditor;
		if (editor) {
			const selection = editor.selection;
			const selectedText = editor.document.getText(selection);

			const logText = selectedText
				? `\tconsole.log("🚀🚀 Your selected text is ${selectedText}: ", ${selectedText});\n`
				: 'console.log("🚀🚀 No text selected!");\n';

			editor.edit((editBuilder) => {
				const insertionLine = selection.end.line + 1;
				const insertionPosition = new vscode.Position(insertionLine, 0);

				// Insert the log on the new line
				editBuilder.insert(insertionPosition, logText);
			}).then((success) => {
				if (success) {
					console.log('Log inserted successfully!');
				} else {
					vscode.window.showErrorMessage('Failed to insert log.');
				}
			});
		}
	});

	context.subscriptions.push(disposable);
}

export function deactivate() {
	console.log('Extension "consoleX" deactivated!');
}
