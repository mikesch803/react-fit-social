import React from "react";
import Picker, { SKIN_TONE_MEDIUM_DARK } from "emoji-picker-react";

export const EmojiPicker = ({ setContent }) => {
  const onEmojiClick = (event, emojiObject) => {
    setContent((prev) => prev + emojiObject.emoji);
  };

  return (
    <div>
      <Picker
        onEmojiClick={onEmojiClick}
        disableAutoFocus={true}
        skinTone={SKIN_TONE_MEDIUM_DARK}
        groupNames={{ smileys_people: "PEOPLE" }}
        native
      />
    </div>
  );
};
