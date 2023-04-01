import React from 'react';
import tw from 'twin.macro';
import styled from 'styled-components';
import Logo from '../navbar/Logo';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
import Link from 'next/link';

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer>
      <Container>
        <FooterContentContainer>
          <FooterLogo />
          <SupportEmail>support@cyberfonz.com</SupportEmail>
          <SocialIconsContainer>
            <FaFacebookF />
            <FaTwitter />
            <FaInstagram />
            <FaYoutube />
          </SocialIconsContainer>
        </FooterContentContainer>
        <FooterLinks>
          <RightsReserved>&copy; CyberFonz. All Rights Reserved</RightsReserved>
          <LinksContainer>
            <FooterLink href='/terms-privacy'>Terms of use</FooterLink>
            <FooterLink href='/terms-privacy/#privacy-cookies'>
              privacy & cookies
            </FooterLink>
            <FooterLink href='/customer-support/#faq'>FAQs</FooterLink>
            <FooterLink href='/customer-support'>
              Shipping and Delivery
            </FooterLink>
            <FooterLink href='/customer-support/#returns'>
              Returns and Exchanges
            </FooterLink>
            <FooterLink href='/contact'>contact</FooterLink>
          </LinksContainer>
        </FooterLinks>
      </Container>
    </footer>
  );
};

export default Footer;

const Container = styled.div`
  ${tw`px-8 py-8 mx-auto divide-y divide-gray-400/70 max-w-7xl`}
`;

const FooterContentContainer = styled.div`
  ${tw`flex flex-wrap items-center justify-between gap-4 pb-4`}
`;

const FooterLogo = styled(Logo)`
  ${tw`order-1 mx-0`}
`;
const SupportEmail = styled.span`
  ${tw`order-3 text-sm md:mr-auto md:order-2`}
`;

const SocialIconsContainer = styled.div`
  ${tw`flex order-2 gap-4 md:order-3`}
`;

const FooterLinks = styled.div`
  ${tw`flex flex-wrap items-center justify-between pt-4`}
`;

const RightsReserved = styled.p`
  ${tw`text-sm`}
`;

const LinksContainer = styled.div`
  ${tw`flex flex-wrap mt-4 md:gap-8 md:mt-0 gap-x-4 gap-y-2`}
`;

const FooterLink = styled(Link)`
  ${tw`text-sm text-gray-400 capitalize`}
`;
