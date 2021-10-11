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
  const [hoverLink, setHoverLink] = useState(false);

  const onMouseMove = (e: MouseEvent) => {
    setPosition({ x: e.pageX, y: e.pageY });
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

  const onMouseEnterLink = () => {
    setHoverLink(true);
  };

  const onMouseLeaveLink = () => {
    setHoverLink(false);
  };

  const links = document.querySelectorAll('a, button, .hamburger-react');
  const formFields = document.querySelectorAll('input, textarea');

  useEffect(() => {
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
      links.forEach((link) => {
        link.addEventListener('mouseenter', onMouseEnterLink);
        link.addEventListener('mouseleave', onMouseLeaveLink);
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
        links.forEach((link) => {
          link.removeEventListener('mouseenter', onMouseEnterLink);
          link.removeEventListener('mouseleave', onMouseLeaveLink);
        });
      }
    };
  }, []);

  const cursorClasses = classNames(styles.cursor, {
    [styles.hidden]: isHidden,
    [styles.clicked]: clicked,
    [styles.hover]: hoverLink,
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
