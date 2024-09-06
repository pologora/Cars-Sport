import { DEFAULT_PREVIEW_TEXT_CHARS_LENGTH } from '../../config/contstanst';
import arrowIcon from '../../assets/images/icons/arrow.png';
import { useState } from 'react';

type ExpandableTextProps = {
  title: string;
  text: string;
};

type GetPreviewTextProps = {
  length?: number;
  text: string;
};

const getPreviewText = ({ length = DEFAULT_PREVIEW_TEXT_CHARS_LENGTH, text }: GetPreviewTextProps) => {
  if (length >= text.length) {
    return text;
  }

  return text.slice(0, length + 1);
};

const Accordion = ({ title, text }: ExpandableTextProps) => {
  const [fullView, setFullView] = useState(false);

  const previewText = getPreviewText({ text });

  const fullViewToggle = () => {
    setFullView((prev) => !prev);
  };

  return (
    <article>
      <h3 className='h3'>{title}</h3>
      <p className='text-sm mt-4 mb-6'>{fullView ? text : `${previewText} [...]`} </p>
      <button
        className='flex items-center gap-1 text-sm border-b-2 pb-1'
        onClick={fullViewToggle}
      >
        {fullView ? 'Zwiń' : 'Rozwiń'}
        <img
          className={`inline transition-transform duration-300 ${fullView ? 'rotate-180' : ''}`}
          width={13}
          height={15}
          src={arrowIcon}
        />
      </button>
    </article>
  );
};
export default Accordion;
