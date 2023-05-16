import React, { useCallback, useEffect, useState } from 'react';
import { BareProps, ChainProps } from '@/types/page';
import { PageContent, Container, Text, Flex, Link, Popover, PopoverTrigger, PopoverContent, Menu, MenuButton, MenuItems, MenuItem } from '@/ui';
import { COPYRIGHT_PERIOD } from '@/config/constants';
import { DonateIcon, EarthIcon, MailIcon, MoonIcon, SunIcon } from '@/ui/Svg';
import { AccountLink } from '../Links';
import { useDarkMode } from 'usehooks-ts';

interface Props extends BareProps {
  chain?: ChainProps | undefined;
}

function DonatePopver({ symbol, address }: { symbol: string; address: string }) {
  return (
    <Popover>
      <PopoverTrigger><DonateIcon className='w-5 text-sub-b2' /></PopoverTrigger>
      <PopoverContent>
        <Text block>Donate ({symbol})</Text>
        <AccountLink address={address} />
      </PopoverContent>
    </Popover>
  );
}

function ThemeSwitcher() {
  const [isDark, SetIsDark] = useState(true);
  const { isDarkMode, enable, disable } = useDarkMode()


  const enableDark = useCallback(() => {
    document.documentElement.classList.add('dark');
    enable();
  }, [enable])

  const disableDark = useCallback(() => {
    document.documentElement.classList.remove('dark');
    disable();
  }, [disable])

  useEffect(() => {
    SetIsDark(isDarkMode);
    isDarkMode ? enableDark() : disableDark();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isDarkMode]);

  return (
    <>
      {isDark ? <SunIcon onClick={disableDark} className='w-5 text-sub-b2 cursor-pointer' /> : <MoonIcon onClick={enableDark} className='w-5 text-sub-b2 cursor-pointer' />}
    </>
  )
}

function LanguageSwitcher() {
  const languages = [{
    value: 'en',
    label: 'English'
  }, {
    value: 'zh',
    label: '简体中文'
  }];

  return (
    <Popover>
      <PopoverTrigger><EarthIcon className='w-5 text-sub-b2 cursor-pointer' /></PopoverTrigger>
      <PopoverContent>
        {languages.map((lang) => {
          return <div key={lang.value}>{lang.label}</div>
        })}
      </PopoverContent>
    </Popover>
  )
}

const Component: React.FC<Props> = ({ chain, children, className }) => {
  return (<PageContent disablePadding className='bg-sub-b4'>
    <Container className="flex flex-1 justify-between items-center py-5">
      <Flex className='w-full justify-between'>
        <Text className='text-xs text-sub-b2'>Subscan © {COPYRIGHT_PERIOD} - Developed by Subscan Team</Text>
        <Flex className='space-x-5 items-center'>
          <Link className='text-xs text-sub-b2' href='https://medium.com/subscan/tagged/subscan-update'>Version History</Link>
          <Link className='text-xs text-sub-b2' href='https://www.subscan.io/privacy'>Privacy Policy</Link>
          <Link className='text-xs text-sub-b2' href='https://www.subscan.io/term'>Terms of Use</Link>
          <Link className='text-xs text-sub-b2' href='https://www.subscan.io/open-source-notices'>Open Source Notices</Link>
          <Link className='text-xs text-sub-b2' href='https://subscan.statuspage.io/'>Service Status</Link>
          <Link className='text-xs text-sub-b2' href='https://github.com/itering/subscan-issue-tracker/issues/new/choose'>Feedback</Link>
          {chain?.chainConf.donate ? <DonatePopver symbol={chain?.nativeTokenConf.symbol} address={chain?.chainConf.donate} /> : null}
          <MailIcon className='w-5 text-sub-b2' />
          <ThemeSwitcher />
          <LanguageSwitcher />
        </Flex>
      </Flex>
    </Container>
  </PageContent>);
};

export default Component;