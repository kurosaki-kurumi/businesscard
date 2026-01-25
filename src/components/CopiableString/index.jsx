import { useState } from 'react';
import copyIcon from './content_copy_24dp_1F1F1F.svg'
import checkIcon from './check_24dp_1F1F1F.svg'

export const CopiableString = ({ text }) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(text).then(() => {
      setTimeout(() => setCopied(false), 800);
      setCopied(true);
    }).catch(err => {
      console.error('Failed to copy text: ', err);
    });
  };

  return (
    <>
      <span className='string'>{text}</span>
      <button onClick={copyToClipboard} className="copy-button">
        <img src={copied ? checkIcon : copyIcon} alt="コピーする" />
      </button>
    </>
  );
};
