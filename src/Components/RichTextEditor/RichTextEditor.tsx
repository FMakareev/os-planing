import React from 'react';
import {Editor, EditorState} from "draft-js";
import {stateToHTML, } from 'draft-js-export-html';
import { convertFromHTML } from 'draft-convert';

interface IRichTextEditorProps {
  value?: string;

  onChange?(value: string): void;

  placeholder?: string;

  [prop: string]: any

}

interface IRichTextEditorState {
  editorState: EditorState
}


export class RichTextEditor extends React.Component<IRichTextEditorProps, IRichTextEditorState> {
  constructor(props: IRichTextEditorProps) {
    super(props);
    this.state = this.initialState;
  }

  get initialState() {

    if (typeof this.props.value === "string") {
      return {
        // @ts-ignore
        editorState: EditorState.createWithContent(convertFromHTML(this.props.value))
      };
    }
    return {
      editorState: EditorState.createEmpty()
    };

  }

  onChange = (editorState: EditorState) => {
    this.setState({editorState});
    if (this.props.onChange) {
      if (editorState.getCurrentContent().getPlainText()) {
        let html = stateToHTML(editorState.getCurrentContent());
        this.props.onChange(html);
      } else {
        this.props.onChange('');
      }
    }
  };

  render() {
    const {placeholder, onFocus, onBlur, disabled} = this.props;
    return (
      <Editor
        editorState={this.state.editorState}
        onChange={this.onChange}
        placeholder={placeholder}
        onFocus={onFocus}
        onBlur={onBlur}
        readOnly={disabled}

      />
    );
  }
}

export default RichTextEditor;