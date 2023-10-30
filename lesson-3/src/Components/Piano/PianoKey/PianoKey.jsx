import React, { Component } from 'react';
import { WhiteKey } from './WhiteKey/WhiteKey.styled';
import { BlackKey } from './BlackKey/BlackKey.styled';
import { playNote } from '../../../utils/piano';

export class PianoKey extends Component {
  handlePress = () => {
    // const { note, octave } = this.props;
    // playNote(note, octave);
    // alert(`${note}${octave}`);

    const { onPress, note } = this.props;
    onPress(note);
  };

  renderBlackKey() {
    const { note } = this.props;
    return <BlackKey $note={note} onClick={this.handlePress} />;
  }

  renderWhiteKey() {
    const { note } = this.props;
    return <WhiteKey $note={note} onClick={this.handlePress} />;
  }

  render() {
    const { note } = this.props;

    if (note.length === 2) {
      return this.renderBlackKey();
    }
    return this.renderWhiteKey();
  }
}

