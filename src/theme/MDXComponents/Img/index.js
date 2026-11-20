import React from 'react';
import clsx from 'clsx';
import useBaseUrl from '@docusaurus/useBaseUrl';
import ThemedImage from '@theme/ThemedImage';

const SCREENSHOT_Direct_REGEX = /(?:^|\/)img\/screenshots\/([a-z0-9-]+)\.png$/i;
const SCREENSHOT_HASHED_REGEX = /(?:^|\/)assets\/images\/([a-z0-9-]+)-[0-9a-f]{32}\.png$/i;

function extractScreenshotName(src) {
  if (typeof src !== 'string' || !src) {
    return null;
  }
  const directMatch = src.match(SCREENSHOT_Direct_REGEX);
  if (directMatch) {
    return directMatch[1];
  }
  const hashedMatch = src.match(SCREENSHOT_HASHED_REGEX);
  if (hashedMatch) {
    return hashedMatch[1];
  }
  return null;
}

export default function MDXImg(props) {
  const screenshotName = extractScreenshotName(props.src);
  const lightUrl = useBaseUrl(
    screenshotName ? `/img/screenshots/light/${screenshotName}.png` : '/'
  );
  const darkUrl = useBaseUrl(
    screenshotName ? `/img/screenshots/dark/${screenshotName}.png` : '/'
  );

  if (screenshotName) {
    const { src, ...restProps } = props;
    return (
      <ThemedImage
        decoding="async"
        loading="lazy"
        {...restProps}
        className={clsx(props.className, 'ptv-themed-screenshot')}
        sources={{
          light: lightUrl,
          dark: darkUrl,
        }}
      />
    );
  }

  return (
    // eslint-disable-next-line jsx-a11y/alt-text
    <img
      decoding="async"
      loading="lazy"
      {...props}
      className={clsx(props.className)}
    />
  );
}
