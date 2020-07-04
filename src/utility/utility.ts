export const scrollToContentLocation = (x: number, y: number): void => {
  let contentElement = document.getElementById('content');

  if (contentElement) contentElement.scrollTo({ left: x, top: y, behavior: 'smooth' });
}

export const scrollToContentChild = (childElementName: string): void => {
  let contentElement = document.getElementById('content');
  let childElement = document.getElementById(childElementName);
  let y = childElement ? childElement.getBoundingClientRect().top : 0;
  let navigationBarElement = document.getElementById('navigation-bar');
  let navigationBarHeight = navigationBarElement ? navigationBarElement.getBoundingClientRect().height : 0;

  if (contentElement) contentElement.scrollBy({ left: 0, top: Math.round((y - navigationBarHeight)), behavior: 'smooth' });
}
