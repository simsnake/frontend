import logo from '../logo.svg';
import '../App.css';
import Header from '../components/Header';
import React, { useState, useEffect } from 'react';
import styled, { ThemeProvider } from "styled-components";
import WebFont from 'webfontloader';
import { GlobalStyles } from '../theme/GlobalStyles';
import { useTheme } from '../theme/useTheme';
import Block from '../components/Block';

const Container = styled.div`
  margin: 5px auto 5px auto;
`;

function Theme() {
  // 3: Get the selected theme, font list, etc.
  const { theme, themeLoaded, getFonts } = useTheme();
  const [selectedTheme, setSelectedTheme] = useState(theme);

  useEffect(() => {
    setSelectedTheme(theme);
  }, [theme, themeLoaded]);

  // 4: Load all the fonts
  useEffect(() => {
    WebFont.load({
      google: {
        families: getFonts()
      }
    });
  });

  return (
    <>
      {
        themeLoaded && <ThemeProvider theme={selectedTheme}>
          <GlobalStyles />
              <h1>theme page content!</h1>
        </ThemeProvider>
      }
    </>
  );
}


export default Theme;