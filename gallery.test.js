/**
 * @jest-environment jsdom
 */
const fs = require('fs');
const path = require('path');

beforeEach(() => {
  document.documentElement.innerHTML = fs.readFileSync(
    path.resolve(__dirname, 'index.html'),
    'utf8'
  );
  jest.resetModules();
  require('./script.js');
});

const visibleCount = () =>
  document.querySelectorAll('.item:not(.hide)').length;

test('all 8 images show by default', () => {
  expect(visibleCount()).toBe(8);
});

test('nature filter shows only nature images', () => {
  document.querySelector('[data-filter="nature"]').click();
  expect(visibleCount()).toBe(3);
});

test('all filter restores every image', () => {
  document.querySelector('[data-filter="nature"]').click();
  document.querySelector('[data-filter="all"]').click();
  expect(visibleCount()).toBe(8);
});

test('clicking an image opens the lightbox', () => {
  document.querySelector('.item').click();
  expect(document.getElementById('lightbox').classList.contains('open')).toBe(true);
  expect(document.getElementById('lightbox-caption').textContent).toBe('Mountain lake');
});

test('next button shows the next image', () => {
  document.querySelector('.item').click();
  document.getElementById('next').click();
  expect(document.getElementById('lightbox-caption').textContent).toBe('City street');
});

test('previous on first image wraps to the last', () => {
  document.querySelector('.item').click();
  document.getElementById('prev').click();
  expect(document.getElementById('lightbox-caption').textContent).toBe('Bridge');
});

test('Escape key closes the lightbox', () => {
  document.querySelector('.item').click();
  document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }));
  expect(document.getElementById('lightbox').classList.contains('open')).toBe(false);
});
