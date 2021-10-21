import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import styles from './Cursor.module.css';
import isMobile from './mobileCheck';

type TPosition = {
  x: number;
  y: number;
} | null;

const Cursor: React.FC = () => {
  const [position, setPosition] = useState<TPosition>(null);
  const [isHidden, setIsHidden] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [highlighted, setHighlighted] = useState(false);

  const onMouseMove = (e: MouseEvent) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  const handleMouseHide = () => {
    setIsHidden(true);
  };

  const handleMouseShow = () => {
    setIsHidden(false);
  };

  const onMouseDown = () => {
    setClicked(true);
  };

  const onMouseUp = () => {
    setClicked(false);
  };

  const onMouseHoverStart = () => {
    setHovered(true);
  };

  const onMouseHoverEnd = () => {
    setHovered(false);
  };

  const onMouseHighlightStart = () => {
    setHighlighted(true);
  };

  const onMouseHighlightEnd = () => {
    setHighlighted(false);
  };

  useEffect(() => {
    const interactiveElements = document.querySelectorAll(
      'a, button, [role="button"], [role="link"]'
    );
    const highlightedElements = document.querySelectorAll(
      '#logo, [class*=Home_title]'
    );
    const formFields = document.querySelectorAll('input, textarea');

    // Prevent adding listeners if the device doesn't support hoover
    if (window.matchMedia('(hover: hover)').matches) {
      document.body.addEventListener('mousemove', onMouseMove);
      document.body.addEventListener('mouseleave', handleMouseHide);
      document.body.addEventListener('mouseenter', handleMouseShow);
      document.body.addEventListener('mousedown', onMouseDown);
      document.body.addEventListener('mouseup', onMouseUp);
      formFields.forEach((field) => {
        field.addEventListener('mouseenter', handleMouseHide);
        field.addEventListener('mouseleave', handleMouseShow);
      });
      interactiveElements.forEach((el) => {
        el.addEventListener('mouseenter', onMouseHoverStart);
        el.addEventListener('mouseleave', onMouseHoverEnd);
      });
      highlightedElements.forEach((el) => {
        el.addEventListener('mouseenter', onMouseHighlightStart);
        el.addEventListener('mouseleave', onMouseHighlightEnd);
      });
    }

    return () => {
      if (window.matchMedia('(hover: hover)').matches) {
        document.body.removeEventListener('mousemove', onMouseMove);
        document.body.removeEventListener('mouseleave', handleMouseHide);
        document.body.removeEventListener('mouseenter', handleMouseShow);
        document.body.removeEventListener('mousedown', onMouseDown);
        document.body.removeEventListener('mouseup', onMouseUp);
        formFields.forEach((field) => {
          field.removeEventListener('mouseenter', handleMouseHide);
          field.removeEventListener('mouseleave', handleMouseShow);
        });
        interactiveElements.forEach((el) => {
          el.removeEventListener('mouseenter', onMouseHoverStart);
          el.removeEventListener('mouseleave', onMouseHoverEnd);
        });
        highlightedElements.forEach((el) => {
          el.removeEventListener('mouseenter', onMouseHighlightStart);
          el.removeEventListener('mouseleave', onMouseHighlightEnd);
        });
      }
    };
  }, []);

  const cursorClasses = classNames(styles.cursor, {
    [styles.hidden]: isHidden,
    [styles.clicked]: clicked,
    [styles.hover]: hovered,
    [styles.highlight]: highlighted,
  });

  // Prevent component display on mobile devices (and tablets)
  if (isMobile()) return null;

  return (
    <div
      className={cursorClasses}
      style={
        (position && { top: `${position.y}px`, left: `${position.x}px` }) ||
        undefined
      }
    />
  );
};

export default Cursor;
