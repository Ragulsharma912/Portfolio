import { useEffect, useState } from 'react';

interface TypingTextProps {
  words: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
  className?: string;
}

/** Classic typewriter effect that cycles through a list of role titles. */
export default function TypingText({
  words,
  typingSpeed = 70,
  deletingSpeed = 40,
  pauseDuration = 1800,
  className = '',
}: TypingTextProps) {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex % words.length];

    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && text.length < currentWord.length) {
      timeout = setTimeout(() => setText(currentWord.slice(0, text.length + 1)), typingSpeed);
    } else if (!isDeleting && text.length === currentWord.length) {
      timeout = setTimeout(() => setIsDeleting(true), pauseDuration);
    } else if (isDeleting && text.length > 0) {
      timeout = setTimeout(() => setText(currentWord.slice(0, text.length - 1)), deletingSpeed);
    } else if (isDeleting && text.length === 0) {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pauseDuration]);

  return (
    <span className={className}>
      {text}
      <span className="inline-block w-[3px] h-[1em] bg-secondary ml-1 animate-blink align-middle" />
    </span>
  );
}
