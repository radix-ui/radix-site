import { Box, Card, Flex, Grid, Heading, IconButton, Slider, Text, Theme } from '@radix-ui/themes';
import { Label } from '@radix-ui/react-label';
import NextLink from 'next/link';

export function ThemesBorderRadiusScale() {
  return (
    <Flex gap="4" mt="6" mb="5">
      {[...new Array(6)].map((_, i) => (
        <Flex direction="column" key={i} grow="1" align="center" gap="3">
          <Box height="8" width="100%">
            <DecorativeBox style={{ borderRadius: `var(--radius-${i + 1})` }} />
          </Box>

          <Text size="1" color="gray">
            {i + 1}
          </Text>
        </Flex>
      ))}
    </Flex>
  );
}

export function ThemesShadowScale() {
  return (
    <Flex direction="column" gap="3" mt="6" mb="5">
      <Flex
        style={{ flex: 1, backgroundColor: 'var(--gray-4)', borderRadius: 'var(--radius-3)' }}
        p="5"
        gap="4"
      >
        {[...new Array(5)].map((_, i) => (
          <Flex grow="1" align="center" justify="center" key={i}>
            <Box
              grow="1"
              style={{
                backgroundColor: 'var(--gray-1)',
                boxShadow: `var(--shadow-${i + 1})`,
                borderRadius: 'var(--radius-2)',
              }}
              height="8"
              key={i}
            />
          </Flex>
        ))}
      </Flex>

      <Flex align="center" gap="1" px="4">
        {[...new Array(5)].map((_, i) => (
          <Flex align="center" justify="center" height="100%" width="100%" key={i}>
            <Text size="1" color="gray">
              {i + 1}
            </Text>
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
}

export function SwatchRow({ name }: { name: string }) {
  return (
    <Grid columns="12" gap="1">
      {[...new Array(12)].map((_, i) => (
        <Box
          height="6"
          style={{
            backgroundColor: `var(--${name}-${i + 1})`,
            borderRadius: 'var(--radius-2)',
          }}
          key={i}
        />
      ))}
    </Grid>
  );
}

export function ThemesColorScale({ type = 'accent' }: { type: 'accent' | 'gray' }) {
  return (
    <Flex direction="column" gap="3" mt="6" mb="5">
      <Flex align="center" gap="1">
        {[...new Array(12)].map((_, i) => (
          <Flex grow="1" direction="column" height="9" gap="1" key={i}>
            <Box
              grow="1"
              style={{
                backgroundColor: `var(--${type}-${i + 1})`,
                borderRadius: 'var(--radius-2)',
              }}
            />

            <Box
              grow="1"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none'%3E%3Crect width='12' height='12' fill='%23002F75' fill-opacity='0.02'/%3E%3Crect x='12' y='12' width='12' height='12' fill='%23002F75' fill-opacity='0.02'/%3E%3C/svg%3E")`,
                backgroundColor: `var(--${type}-a${i + 1})`,
                borderRadius: 'var(--radius-2)',
              }}
            />
          </Flex>
        ))}
      </Flex>

      <Flex align="center" gap="1">
        {[...new Array(12)].map((_, i) => (
          <Flex align="center" justify="center" height="100%" width="100%" key={i}>
            <Text size="1" color="gray">
              {i + 1}
            </Text>
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
}

export function ThemesSpacingScale() {
  return (
    <Flex align="end" gap="1" mt="7" mb="5">
      {[...new Array(9)].map((_, i) => (
        <Flex direction="column" grow="1" key={i} align="center" gap="4">
          <DecorativeBox style={{ width: '100%', height: `var(--space-${i + 1})` }} />

          <Text size="1" color="gray">
            {i + 1}
          </Text>
        </Flex>
      ))}
    </Flex>
  );
}

export function ThemesFontSizeScale() {
  return (
    <Box pb="6">
      <Flex align="stretch" style={{ borderBottom: '1px dashed var(--gray-a6)' }}>
        {[...new Array(9)].map((_, i) => (
          <Flex
            direction="column"
            grow="1"
            key={i}
            justify="end"
            align="center"
            position="relative"
          >
            <Text weight="bold" style={{ fontSize: `var(--font-size-${i + 1})` }} trim="both">
              Aa
            </Text>

            <Flex position="absolute" style={{ top: 'calc(100% + var(--space-4))' }}>
              <Text size="1" color="gray">
                {i + 1}
              </Text>
            </Flex>
          </Flex>
        ))}
      </Flex>
    </Box>
  );
}

export function ThemesAccentSwatches() {
  return (
    <Flex direction="column" gap="5" my="6">
      <Grid columns={{ initial: '3', xs: '4', sm: '6' }} gap="2">
        {([
          'tomato',
          'red',
          'crimson',
          'pink',
          'plum',
          'purple',
          'violet',
          'indigo',
          'blue',
          'cyan',
          'teal',
          'green',
          'grass',
          'brown',
          'orange',
          'gold',
          'bronze',
          'gray',
        ] as const).map((color, i) => (
          <Box grow="1" key={i}>
            <Theme appearance="dark" accentScale={color} applyBackgroundColor={false} asChild>
              <Flex
                align="center"
                justify="center"
                gap="2"
                style={{ backgroundColor: `var(--accent-9)`, borderRadius: 'var(--radius-2)' }}
                height="6"
              >
                <Text as="div" size="1" weight="bold">
                  {color.charAt(0).toUpperCase() + color.slice(1)}
                </Text>
              </Flex>
            </Theme>
          </Box>
        ))}
      </Grid>
    </Flex>
  );
}

export function ThemesBrightAccentSwatches() {
  return (
    <Flex direction="column" gap="5" my="6">
      <Grid columns={{ initial: '3', xs: '4', sm: '6' }} gap="2">
        {(['sky', 'mint', 'lime', 'yellow', 'amber'] as const).map((color, i) => (
          <Box grow="1" key={i}>
            <Theme appearance="light" accentScale={color} applyBackgroundColor={false} asChild>
              <Flex
                align="center"
                justify="center"
                gap="2"
                style={{ backgroundColor: `var(--accent-9)`, borderRadius: 'var(--radius-2)' }}
                height="6"
              >
                <Text as="div" size="1" weight="bold">
                  {color.charAt(0).toUpperCase() + color.slice(1)}
                </Text>
              </Flex>
            </Theme>
          </Box>
        ))}
      </Grid>
    </Flex>
  );
}

export function ThemeGraySwatches() {
  return (
    <Flex direction="column" gap="5" my="6">
      <Grid columns={{ initial: '3', xs: '4', sm: '6' }} gap="2">
        {(['gray', 'mauve', 'slate', 'sage', 'olive', 'sand'] as const).map((color, i) => (
          <Box grow="1" key={i}>
            <Theme grayScale={color} applyBackgroundColor={false} asChild>
              <Flex
                align="center"
                justify="center"
                gap="2"
                style={{ backgroundColor: `var(--gray-9)`, borderRadius: 'var(--radius-2)' }}
                px="2"
                py="2"
              >
                <Theme appearance="dark" applyBackgroundColor={false}>
                  <Text as="div" size="1" weight="bold" style={{ color: 'white' }}>
                    {color.charAt(0).toUpperCase() + color.slice(1)}
                  </Text>
                </Theme>
              </Flex>
            </Theme>
          </Box>
        ))}
      </Grid>
    </Flex>
  );
}

export function ThemesAnatomy() {
  return (
    <Theme backgroundColor="gray" asChild className="radix-themes-example">
      <Flex
        style={{
          border: '1px solid var(--gray-4)',
          borderRadius: 'var(--radius-4)',
        }}
        align="center"
        justify="center"
        my="7"
        p={{ initial: '4', xs: '5', sm: '6' }}
      >
        <Card size="3" style={{ maxWidth: 460, width: '100%' }}>
          <Flex direction="column">
            <Box height="4" mb="6">
              <Flex align="center" justify="between">
                <Heading as="h3" size="4" trim="both">
                  Sound
                </Heading>

                <Flex gap="4">
                  <Text size="2" color="gray">
                    Yamaha THR
                  </Text>
                </Flex>
              </Flex>
            </Box>

            <Flex gap="2" align="center" height="4" mt="2" mb="5">
              <VolumeNoneIcon color="var(--gray-a9)" />
              <Box grow="1">
                <Slider tabIndex={-1} radius="full" defaultValue={[80]} />
              </Box>
              <VolumeMaxIcon color="var(--gray-a9)" />
            </Flex>

            <Grid columns={{ initial: '2', xs: '4' }} pt="2" pb="1" gapY="5">
              <Flex direction="column" gap="2" align="center" asChild>
                <Label>
                  <IconButton tabIndex={-1} radius="full" variant="solid">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 30 30"
                      width="16"
                      height="16"
                      fill="currentColor"
                    >
                      <path d="M 21 4 C 20.448 4 20 4.448 20 5 L 20 25 C 20 25.552 20.448 26 21 26 L 25 26 C 25.552 26 26 25.552 26 25 L 26 5 C 26 4.448 25.552 4 25 4 L 21 4 z M 13 10 C 12.448 10 12 10.448 12 11 L 12 25 C 12 25.552 12.448 26 13 26 L 17 26 C 17.552 26 18 25.552 18 25 L 18 11 C 18 10.448 17.552 10 17 10 L 13 10 z M 5 16 C 4.448 16 4 16.448 4 17 L 4 25 C 4 25.552 4.448 26 5 26 L 9 26 C 9.552 26 10 25.552 10 25 L 10 17 C 10 16.448 9.552 16 9 16 L 5 16 z" />
                    </svg>
                  </IconButton>
                  <Flex direction="column">
                    <Text align="center" weight="medium" size="2">
                      Normalize
                    </Text>
                    <Text align="center" color="gray" size="1">
                      On
                    </Text>
                  </Flex>
                </Label>
              </Flex>

              <Flex direction="column" gap="2" align="center" asChild>
                <Label>
                  <IconButton tabIndex={-1} radius="full" variant="solid">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 30 30"
                      width="16"
                      height="16"
                      fill="currentColor"
                    >
                      <path d="M 22 4 A 1.0001 1.0001 0 1 0 22 6 L 28 6 A 1.0001 1.0001 0 1 0 28 4 L 22 4 z M 2 8 A 1.0001 1.0001 0 1 0 2 10 L 8 10 A 1.0001 1.0001 0 1 0 8 8 L 2 8 z M 22 8 A 1.0001 1.0001 0 1 0 22 10 L 28 10 A 1.0001 1.0001 0 1 0 28 8 L 22 8 z M 2 12 A 1.0001 1.0001 0 1 0 2 14 L 8 14 A 1.0001 1.0001 0 1 0 8 12 L 2 12 z M 22 12 A 1.0001 1.0001 0 1 0 22 14 L 28 14 A 1.0001 1.0001 0 1 0 28 12 L 22 12 z M 2 16 A 1.0001 1.0001 0 1 0 2 18 L 8 18 A 1.0001 1.0001 0 1 0 8 16 L 2 16 z M 12 16 A 1.0001 1.0001 0 1 0 12 18 L 18 18 A 1.0001 1.0001 0 1 0 18 16 L 12 16 z M 22 16 A 1.0001 1.0001 0 1 0 22 18 L 28 18 A 1.0001 1.0001 0 1 0 28 16 L 22 16 z M 2 20 A 1.0001 1.0001 0 1 0 2 22 L 8 22 A 1.0001 1.0001 0 1 0 8 20 L 2 20 z M 12 20 A 1.0001 1.0001 0 1 0 12 22 L 18 22 A 1.0001 1.0001 0 1 0 18 20 L 12 20 z M 22 20 A 1.0001 1.0001 0 1 0 22 22 L 28 22 A 1.0001 1.0001 0 1 0 28 20 L 22 20 z M 2 24 A 1.0001 1.0001 0 1 0 2 26 L 8 26 A 1.0001 1.0001 0 1 0 8 24 L 2 24 z M 12 24 A 1.0001 1.0001 0 1 0 12 26 L 18 26 A 1.0001 1.0001 0 1 0 18 24 L 12 24 z M 22 24 A 1.0001 1.0001 0 1 0 22 26 L 28 26 A 1.0001 1.0001 0 1 0 28 24 L 22 24 z" />
                    </svg>
                  </IconButton>
                  <Flex direction="column">
                    <Text align="center" weight="medium" size="2">
                      Equalizer
                    </Text>
                    <Text align="center" color="gray" size="1">
                      On
                    </Text>
                  </Flex>
                </Label>
              </Flex>

              <Flex direction="column" gap="2" align="center" asChild>
                <Label>
                  <IconButton tabIndex={-1} radius="full" variant="soft" color="gray">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 30 30"
                      width="16"
                      height="16"
                      fill="currentColor"
                    >
                      <path d="M 15 3 C 14.501862 3 14.004329 3.1237904 13.554688 3.3710938 L 4.7773438 8.1992188 C 4.2990638 8.4622726 4 8.9690345 4 9.5136719 L 4 10.128906 L 4 20.048828 C 4 20.573313 4.2799803 21.064852 4.7265625 21.333984 A 1.0001 1.0001 0 0 0 4.7285156 21.335938 L 13.457031 26.572266 C 14.405619 27.141718 15.594381 27.141718 16.542969 26.572266 L 25.269531 21.337891 L 25.271484 21.335938 C 25.723679 21.065216 26 20.572371 26 20.048828 L 26 9.5136719 C 26 8.9690345 25.700936 8.4622727 25.222656 8.1992188 L 16.445312 3.3710938 C 15.99567 3.1237903 15.498138 3 15 3 z M 15 5 C 15.166032 5 15.332064 5.0423034 15.482422 5.125 L 23.166016 9.3496094 L 19.755859 11.179688 L 20.701172 12.941406 L 24 11.171875 L 24 19.765625 L 16 24.566406 L 16 21 L 14 21 L 14 24.566406 L 6 19.765625 L 6 11.171875 L 9.2988281 12.941406 L 10.244141 11.179688 L 6.8339844 9.3496094 L 14.517578 5.125 C 14.667936 5.0423034 14.833968 5 15 5 z M 15 11 A 4 4 0 0 0 15 19 A 4 4 0 0 0 15 11 z" />
                    </svg>
                  </IconButton>
                  <Flex direction="column">
                    <Text align="center" weight="medium" size="2">
                      3D Audio
                    </Text>
                    <Text align="center" color="gray" size="1">
                      Off
                    </Text>
                  </Flex>
                </Label>
              </Flex>

              <Flex direction="column" gap="2" align="center" asChild>
                <Label>
                  <IconButton tabIndex={-1} radius="full" variant="soft" color="gray">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 30 30"
                      width="16"
                      height="16"
                      fill="currentcolor"
                    >
                      <path d="M 8.984375 3.9863281 A 1.0001 1.0001 0 0 0 8 5 L 8 16 A 1.0001 1.0001 0 1 0 10 16 L 10 5 A 1.0001 1.0001 0 0 0 8.984375 3.9863281 z M 4.984375 6.9863281 A 1.0001 1.0001 0 0 0 4 8 L 4 16 A 1.0001 1.0001 0 1 0 6 16 L 6 8 A 1.0001 1.0001 0 0 0 4.984375 6.9863281 z M 12.984375 9.9863281 A 1.0001 1.0001 0 0 0 12 11 L 12 16 A 1.0001 1.0001 0 1 0 14 16 L 14 11 A 1.0001 1.0001 0 0 0 12.984375 9.9863281 z M 0.984375 11.986328 A 1.0001 1.0001 0 0 0 0 13 L 0 16 A 1.0001 1.0001 0 1 0 2 16 L 2 13 A 1.0001 1.0001 0 0 0 0.984375 11.986328 z M 16.984375 14.986328 A 1.0001 1.0001 0 0 0 16 16 L 16 21 A 1.0001 1.0001 0 1 0 18 21 L 18 16 A 1.0001 1.0001 0 0 0 16.984375 14.986328 z M 20.984375 14.986328 A 1.0001 1.0001 0 0 0 20 16 L 20 26 A 1.0001 1.0001 0 1 0 22 26 L 22 16 A 1.0001 1.0001 0 0 0 20.984375 14.986328 z M 24.984375 14.986328 A 1.0001 1.0001 0 0 0 24 16 L 24 23 A 1.0001 1.0001 0 1 0 26 23 L 26 16 A 1.0001 1.0001 0 0 0 24.984375 14.986328 z M 28.984375 14.986328 A 1.0001 1.0001 0 0 0 28 16 L 28 19 A 1.0001 1.0001 0 1 0 30 19 L 30 16 A 1.0001 1.0001 0 0 0 28.984375 14.986328 z" />
                    </svg>
                  </IconButton>
                  <Flex direction="column">
                    <Text align="center" weight="medium" size="2">
                      Cross-Fade
                    </Text>
                    <Text align="center" color="gray" size="1">
                      Off
                    </Text>
                  </Flex>
                </Label>
              </Flex>
            </Grid>
          </Flex>
        </Card>
      </Flex>
    </Theme>
  );
}

const VolumeNoneIcon = (props: React.ComponentPropsWithoutRef<'svg'>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    width="20"
    height="20"
    fill="currentcolor"
    fillOpacity={0.7}
    {...props}
  >
    <path d="M16.3333 4.66669L13.5286 7.33335H11C9.89533 7.33335 9 8.22869 9 9.33335V10.6667C9 11.7714 9.89533 12.6667 11 12.6667H13.5286L16.3333 15.3334V4.66669Z" />
  </svg>
);

const VolumeMaxIcon = (props: React.ComponentPropsWithoutRef<'svg'>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 30 30"
    width="20"
    height="20"
    fill="currentcolor"
    fillOpacity={0.7}
    {...props}
  >
    <path d="M 20.037109 5.6464844 A 1.0001 1.0001 0 0 0 19.236328 7.2734375 C 20.963426 9.4832305 22 12.243759 22 15.255859 C 22 18.055119 21.105815 20.636923 19.59375 22.763672 A 1.0001 1.0001 0 1 0 21.222656 23.921875 C 22.962591 21.474623 24 18.4826 24 15.255859 C 24 11.78396 22.799402 8.5851757 20.8125 6.0429688 A 1.0001 1.0001 0 0 0 20.037109 5.6464844 z M 11 7 L 6.7929688 11 L 3 11 C 1.343 11 0 12.343 0 14 L 0 16 C 0 17.657 1.343 19 3 19 L 6.7929688 19 L 11 23 L 11 7 z M 14.738281 8.5917969 A 1.0001 1.0001 0 0 0 14.001953 10.291016 C 15.239451 11.587484 16 13.328154 16 15.255859 C 16 16.979025 15.392559 18.553804 14.380859 19.796875 A 1.0001 1.0001 0 1 0 15.931641 21.058594 C 17.219941 19.475665 18 17.450694 18 15.255859 C 18 12.799565 17.023721 10.559688 15.449219 8.9101562 A 1.0001 1.0001 0 0 0 14.738281 8.5917969 z" />
  </svg>
);

export function DecorativeBox(props) {
  return (
    <Box
      {...props}
      style={{
        height: '100%',
        backgroundColor: 'var(--gray-a3)',
        border: '1px solid var(--gray-a7)',
        borderRadius: 'var(--radius-1)',
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='6' height='6' viewBox='0 0 6 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%239C92AC' fill-opacity='0.2' fill-rule='evenodd'%3E%3Cpath d='M5 0h1L0 6V5zM6 5v1H5z'/%3E%3C/g%3E%3C/svg%3E")`,
        ...props.style,
      }}
    />
  );
}

export function ThemePagesLinks() {
  return (
    <Grid columns="2" my="6" gap="4">
      <ThemeLinkCard
        title="Overview"
        desc="Learn the theme anatomy and how to create the perfect config for your app."
        href="/themes/docs/theme/overview"
      />

      <ThemeLinkCard
        title="Typography"
        desc="Add custom typefaces and dial in their typographic attributes."
        href="/themes/docs/theme/typography"
      />

      <ThemeLinkCard
        title="Dark mode"
        desc="Integrate a great looking dark mode into your app using appearances."
        href="/themes/docs/theme/dark-mode"
      />

      <ThemeLinkCard
        title="Breakpoints"
        desc="Leverage the built-in responsive design utilities and prop syntax."
        href="/themes/docs/theme/breakpoints"
      />

      <ThemeLinkCard
        title="Tokens"
        desc="Access the underlying theme system to build your own components."
        href="/themes/docs/theme/tokens"
      />

      <ThemeLinkCard
        title="Theme component"
        desc="Study the props API and learn from composition and nesting examples."
        href="/themes/docs/components/theme"
      />
    </Grid>
  );
}

function ThemeLinkCard({ title, desc, href }: { title: string; desc: string; href: string }) {
  return (
    <NextLink href={href} passHref>
      <Card size="2" asChild>
        <a>
          <Text as="div" size="2" weight="bold" mb="1">
            {title}
          </Text>
          <Text as="p" size="2" color="gray">
            {desc}
          </Text>
        </a>
      </Card>
    </NextLink>
  );
}
