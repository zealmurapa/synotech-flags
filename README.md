# @synotech/flags

A comprehensive React Native library providing **500+ circular SVG flags** including country flags, language flags, and fictional flags. Built with `react-native-svg` for crisp, scalable vector graphics that look perfect on any device.

[![NPM Version](https://img.shields.io/npm/v/@synotech/flags)](https://www.npmjs.com/package/@synotech/flags)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![React Native](https://img.shields.io/badge/React%20Native-0.60+-blue.svg)](https://reactnative.dev/)

## 🌍 What's Included

- **🏳️ 400+ Country & Territory Flags**: Complete collection including ISO codes, territories, and regional variants
- **🗣️ 190+ Language Flags**: Visual representation for different languages and locales
- **🏴‍☠️ Fictional Flags**: Fun flags for pirates, science fiction, and fantasy themes
- **🎯 Optimized Performance**: Built-in caching and memoization for smooth rendering
- **📱 React Native Ready**: Designed specifically for mobile applications

## 📋 Prerequisites

⚠️ **Required Peer Dependencies**

This library requires `react-native-svg` to be installed and configured in your project:

```bash
npm install react-native-svg
# or
yarn add react-native-svg

# For React Native 0.60+ (auto-linking)
cd ios && pod install

# Follow the complete setup guide at:
# https://github.com/software-mansion/react-native-svg
```

## 🚀 Installation

```bash
npm install @synotech/flags
# or
yarn add @synotech/flags
```

## 📖 Basic Usage

### Simple Flag Component

The easiest way to display a flag using the main `Flag` component:

```tsx
import React from 'react';
import { View } from 'react-native';
import { Flag } from '@synotech/flags';

const MyComponent = () => {
  return (
    <View>
      {/* Display US flag */}
      <Flag code="us" width={40} height={40} />
      
      {/* Display UK flag */}
      <Flag code="gb" width={32} height={32} />
      
      {/* Using size prop (applies to both width and height) */}
      <Flag code="ca" size={48} />
    </View>
  );
};
```

### Direct Component Import

For better tree-shaking and performance, import specific flag components directly:

```tsx
import React from 'react';
import { View } from 'react-native';
import { Us, Gb, Ca, De, Fr, Jp } from '@synotech/flags';

const FlagGrid = () => {
  return (
    <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
      <Us width={40} height={40} />
      <Gb width={40} height={40} />
      <Ca width={40} height={40} />
      <De width={40} height={40} />
      <Fr width={40} height={40} />
      <Jp width={40} height={40} />
    </View>
  );
};
```

## 🗣️ Language Flags

Display language-specific flags for internationalization:

```tsx
import React from 'react';
import { View } from 'react-native';
import { Languages } from '@synotech/flags';

const LanguageSelector = () => {
  return (
    <View>
      {/* English */}
      <Languages.En width={24} height={24} />
      
      {/* Spanish */}
      <Languages.Es width={24} height={24} />
      
      {/* French */}
      <Languages.Fr width={24} height={24} />
      
      {/* German */}
      <Languages.De width={24} height={24} />
      
      {/* Chinese */}
      <Languages.Zh width={24} height={24} />
      
      {/* Regional English variants */}
      <Languages.EnUs width={24} height={24} />  {/* US English */}
      <Languages.EnGb width={24} height={24} />  {/* UK English */}
      <Languages.EnAu width={24} height={24} />  {/* Australian English */}
      <Languages.EnCa width={24} height={24} />  {/* Canadian English */}
    </View>
  );
};
```

## 🏴‍☠️ Fictional Flags

Add some fun with fictional and themed flags:

```tsx
import React from 'react';
import { View } from 'react-native';
import { Fictional } from '@synotech/flags';

const ThemedFlags = () => {
  return (
    <View>
      {/* Pirate theme */}
      <Fictional.Pirate width={32} height={32} />
      <Fictional.JollyRoger width={32} height={32} />
      
      {/* Science fiction */}
      <Fictional.Klingon width={32} height={32} />
    </View>
  );
};
```

## 🌏 Regional & Territory Flags

Access flags for specific regions, states, and territories:

```tsx
import React from 'react';
import { View } from 'react-native';
import { 
  // US States
  UsCa, UsNy, UsTx, UsFl,
  // Australian States
  AuNsw, AuVic, AuQld, AuWa,
  // UK Regions
  GbEng, GbSct, GbWls, GbNir,
  // Spanish Regions
  EsCt, EsPv, EsGa,
  // Other territories
  CnHk, // Hong Kong
  FrCp, // Corsica
} from '@synotech/flags';

const RegionalFlags = () => {
  return (
    <View>
      {/* US States */}
      <UsCa width={32} height={32} />  {/* California */}
      <UsTx width={32} height={32} />  {/* Texas */}
      
      {/* Australian States */}
      <AuNsw width={32} height={32} /> {/* New South Wales */}
      <AuVic width={32} height={32} /> {/* Victoria */}
      
      {/* UK Countries */}
      <GbEng width={32} height={32} /> {/* England */}
      <GbSct width={32} height={32} /> {/* Scotland */}
    </View>
  );
};
```

## 🎨 Styling & Customization

All flag components accept standard SVG props for full customization:

```tsx
import React from 'react';
import { View } from 'react-native';
import { Flag } from '@synotech/flags';

const StyledFlags = () => {
  return (
    <View>
      {/* Custom dimensions */}
      <Flag code="us" width={60} height={40} />
      
      {/* With opacity */}
      <Flag code="gb" width={40} height={40} style={{ opacity: 0.7 }} />
      
      {/* With rotation */}
      <Flag 
        code="fr" 
        width={40} 
        height={40} 
        style={{ transform: [{ rotate: '45deg' }] }}
      />
      
      {/* With custom positioning */}
      <Flag 
        code="de" 
        width={40} 
        height={40} 
        style={{ 
          position: 'absolute',
          top: 20,
          left: 20,
        }}
      />
    </View>
  );
};
```

## ⚡ Performance Optimization

### Pre-caching Flags

For better performance when displaying many flags, use the pre-caching feature:

```tsx
import React, { useEffect } from 'react';
import { View } from 'react-native';
import { precacheFlagComponents, FlagsCache } from '@synotech/flags';

const OptimizedApp = () => {
  useEffect(() => {
    // Pre-cache all flag components
    const cachedFlags = precacheFlagComponents();
    console.log(`Cached ${Object.keys(cachedFlags).length} flags`);
  }, []);

  return (
    <View>
      {/* This component pre-renders all flags invisibly for better performance */}
      <FlagsCache size={24} />
      
      {/* Your regular app content */}
      <YourAppContent />
    </View>
  );
};
```

### Memoized Flag Lists

When displaying flag lists, use React.memo for better performance:

```tsx
import React, { memo } from 'react';
import { FlatList } from 'react-native';
import { Flag } from '@synotech/flags';

const FlagItem = memo(({ countryCode, name }) => (
  <View style={styles.flagItem}>
    <Flag code={countryCode} width={32} height={32} />
    <Text>{name}</Text>
  </View>
));

const CountryList = ({ countries }) => {
  return (
    <FlatList
      data={countries}
      keyExtractor={(item) => item.code}
      renderItem={({ item }) => (
        <FlagItem countryCode={item.code} name={item.name} />
      )}
    />
  );
};
```

## 🔤 Available Flag Categories

### Country Flags (400+)
Standard ISO country codes and territories:
```tsx
// Major countries
Us, Gb, De, Fr, Jp, Cn, In, Br, Au, Ca, Ru, Za

// European countries
Es, It, Nl, Se, No, Dk, Fi, Pl, Cz, Hu, Pt, Gr, At, Be, Ch

// Asian countries
Jp, Cn, In, Kr, Th, Vn, Id, My, Sg, Ph, Pk, Bd, Lk, Mm

// African countries
Za, Ng, Eg, Ke, Et, Gh, Ug, Tz, Zw, Bw, Mw, Zm

// And many more...
```

### Language Flags (190+)
ISO 639 language codes:
```tsx
// Major languages
En, Es, Fr, De, Zh, Ja, Ko, Ar, Hi, Ru, Pt, It

// Regional variants
EnUs, EnGb, EnAu, EnCa, EnIn, EnZa
EsMx, PtBr, FrCa

// Less common languages
Yi, Vo, Eo, La, Gd, Cy, Mt, Eu, Br
```

### Special & Historical Flags
```tsx
// Organizations
Un, Eu, Nato, Olympics, UnitedNations, EuropeanUnion

// Historical
SovietUnion, Yu

// Cultural/Ethnic
Sami, Maori, Wiphala, Guarani, Quechua, Otomi

// Astronomical
Earth, Mars

// Disputed territories
Xk, NorthernCyprus, Transnistria, SouthOssetia
```

## 📱 Platform Compatibility

- ✅ iOS
- ✅ Android  
- ✅ Web (React Native Web)
- ✅ React Native 0.60+

## 🎯 Use Cases & Examples

### 1. Country Selection Dropdown

```tsx
import React, { useState } from 'react';
import { View, TouchableOpacity, Text, Modal, FlatList } from 'react-native';
import { Flag } from '@synotech/flags';

const countries = [
  { code: 'us', name: 'United States' },
  { code: 'gb', name: 'United Kingdom' },
  { code: 'de', name: 'Germany' },
  { code: 'fr', name: 'France' },
  // ... more countries
];

const CountryPicker = ({ onSelect }) => {
  const [visible, setVisible] = useState(false);
  const [selected, setSelected] = useState(countries[0]);

  const handleSelect = (country) => {
    setSelected(country);
    setVisible(false);
    onSelect?.(country);
  };

  return (
    <View>
      <TouchableOpacity onPress={() => setVisible(true)}>
        <View style={styles.selector}>
          <Flag code={selected.code} width={24} height={24} />
          <Text>{selected.name}</Text>
        </View>
      </TouchableOpacity>

      <Modal visible={visible} animationType="slide">
        <FlatList
          data={countries}
          keyExtractor={(item) => item.code}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => handleSelect(item)}>
              <View style={styles.option}>
                <Flag code={item.code} width={32} height={32} />
                <Text>{item.name}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </Modal>
    </View>
  );
};
```

### 2. Language Switcher

```tsx
import React, { useState } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Languages } from '@synotech/flags';

const languages = [
  { code: 'en', flag: 'En', name: 'English' },
  { code: 'es', flag: 'Es', name: 'Español' },
  { code: 'fr', flag: 'Fr', name: 'Français' },
  { code: 'de', flag: 'De', name: 'Deutsch' },
  { code: 'zh', flag: 'Zh', name: '中文' },
];

const LanguageSwitcher = ({ currentLanguage, onLanguageChange }) => {
  return (
    <View style={styles.languageBar}>
      {languages.map((language) => {
        const FlagComponent = Languages[language.flag];
        return (
          <TouchableOpacity
            key={language.code}
            onPress={() => onLanguageChange(language.code)}
            style={[
              styles.languageButton,
              currentLanguage === language.code && styles.active
            ]}
          >
            <FlagComponent width={20} height={20} />
          </TouchableOpacity>
        );
      })}
    </View>
  );
};
```

### 3. Sports App - Country Standings

```tsx
import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { Flag } from '@synotech/flags';

const CountryStandings = ({ standings }) => {
  const renderStanding = ({ item, index }) => (
    <View style={styles.standingRow}>
      <Text style={styles.position}>{index + 1}</Text>
      <Flag code={item.countryCode} width={28} height={28} />
      <Text style={styles.countryName}>{item.country}</Text>
      <Text style={styles.points}>{item.points}</Text>
    </View>
  );

  return (
    <FlatList
      data={standings}
      keyExtractor={(item) => item.countryCode}
      renderItem={renderStanding}
    />
  );
};
```

### 4. International News App

```tsx
import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Flag } from '@synotech/flags';

const NewsCard = ({ article }) => (
  <TouchableOpacity style={styles.card}>
    <Image source={{ uri: article.image }} style={styles.image} />
    <View style={styles.content}>
      <View style={styles.header}>
        <Flag code={article.countryCode} width={20} height={20} />
        <Text style={styles.country}>{article.country}</Text>
        <Text style={styles.time}>{article.timeAgo}</Text>
      </View>
      <Text style={styles.title}>{article.title}</Text>
      <Text style={styles.summary}>{article.summary}</Text>
    </View>
  </TouchableOpacity>
);
```

### 5. User Profile with Multiple Nationalities

```tsx
import React from 'react';
import { View, Text } from 'react-native';
import { Flag } from '@synotech/flags';

const UserProfile = ({ user }) => (
  <View style={styles.profile}>
    <Text style={styles.name}>{user.name}</Text>
    
    <View style={styles.nationalitiesSection}>
      <Text style={styles.label}>Nationalities:</Text>
      <View style={styles.flagsContainer}>
        {user.nationalities.map((nationality) => (
          <Flag 
            key={nationality} 
            code={nationality} 
            width={24} 
            height={24} 
            style={styles.nationalityFlag}
          />
        ))}
      </View>
    </View>
    
    <View style={styles.languagesSection}>
      <Text style={styles.label}>Languages:</Text>
      <View style={styles.flagsContainer}>
        {user.languages.map((language) => (
          <Languages[language] 
            key={language} 
            width={20} 
            height={20} 
            style={styles.languageFlag}
          />
        ))}
      </View>
    </View>
  </View>
);
```

## 🔍 Flag Code Reference

### Quick Country Code Examples
```tsx
// Common country codes (ISO 3166-1 alpha-2)
'us' // United States
'gb' // United Kingdom  
'de' // Germany
'fr' // France
'jp' // Japan
'cn' // China
'in' // India
'br' // Brazil
'au' // Australia
'ca' // Canada
'mx' // Mexico
'ru' // Russia
'za' // South Africa
'ng' // Nigeria
'eg' // Egypt
'ar' // Argentina
'cl' // Chile
'pe' // Peru
'kr' // South Korea
'th' // Thailand
'id' // Indonesia
'my' // Malaysia
'sg' // Singapore
'ph' // Philippines
'vn' // Vietnam
'ua' // Ukraine
'pl' // Poland
'es' // Spain
'it' // Italy
'pt' // Portugal
'nl' // Netherlands
'be' // Belgium
'ch' // Switzerland
'at' // Austria
'se' // Sweden
'no' // Norway
'dk' // Denmark
'fi' // Finland
```

### Language Code Examples
```tsx
// Common language codes (ISO 639-1)
'en' // English
'es' // Spanish  
'fr' // French
'de' // German
'pt' // Portuguese
'it' // Italian
'ru' // Russian
'zh' // Chinese
'ja' // Japanese
'ko' // Korean
'ar' // Arabic
'hi' // Hindi
'tr' // Turkish
'pl' // Polish
'nl' // Dutch
'sv' // Swedish
'no' // Norwegian
'da' // Danish
'fi' // Finnish
'he' // Hebrew
'th' // Thai
'vi' // Vietnamese
'id' // Indonesian
'ms' // Malay
'tl' // Filipino/Tagalog
'uk' // Ukrainian
'cs' // Czech
'sk' // Slovak
'hu' // Hungarian
'ro' // Romanian
'bg' // Bulgarian
'hr' // Croatian
'sr' // Serbian
'sl' // Slovenian
'et' // Estonian
'lv' // Latvian
'lt' // Lithuanian
'mt' // Maltese
'ga' // Irish
'cy' // Welsh
'eu' // Basque
'ca' // Catalan
'gl' // Galician
```

## 🛠️ TypeScript Support

Full TypeScript support with proper type definitions:

```tsx
import React from 'react';
import { Flag, FlagProps, Languages } from '@synotech/flags';
import { SvgProps } from 'react-native-svg';

interface CountryFlagProps extends FlagProps {
  countryCode: string;
  size?: number;
  onPress?: () => void;
}

const CountryFlag: React.FC<CountryFlagProps> = ({ 
  countryCode, 
  size = 32, 
  onPress,
  ...svgProps 
}) => {
  return (
    <Flag 
      code={countryCode}
      width={size}
      height={size}
      {...svgProps}
    />
  );
};
```

## 🐛 Troubleshooting

### Common Issues

1. **Flags not showing up**
   ```bash
   # Make sure react-native-svg is properly installed
   npm install react-native-svg
   cd ios && pod install
   ```

2. **TypeScript errors**
   ```bash
   # Install type definitions
   npm install --save-dev @types/react-native-svg
   ```

3. **Performance issues with many flags**
   ```tsx
   // Use direct imports instead of the main Flag component
   import { Us, Gb, De } from '@synotech/flags';
   
   // Or use pre-caching
   import { precacheFlagComponents } from '@synotech/flags';
   ```

4. **Flag not found**
   ```tsx
   // Always use lowercase codes
   <Flag code="us" />  // ✅ Correct
   <Flag code="US" />  // ❌ Incorrect
   ```

## 📊 Bundle Size

- Core library: ~50KB
- Individual flag components: ~1-2KB each
- Language flags: ~1KB each
- Total if importing all flags: ~800KB

**Recommendation**: Import only the flags you need for optimal bundle size.

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

## 📄 License

[MIT License](http://opensource.org/licenses/mit-license.html). © Synoptic Technologies 2023

## 🙏 Acknowledgments

- Flag designs based on [Circle Flags](https://github.com/HatScripts/circle-flags)
- Built with [react-native-svg](https://github.com/software-mansion/react-native-svg)
- Created by [Synotech](https://synotech.cloud)

## 📞 Support

- 📧 Email: contact@synotech.cloud
- 🐛 Issues: [GitHub Issues](https://github.com/synotech-ai/synotech-flags/issues)
- 💬 Discussions: [GitHub Discussions](https://github.com/synotech-ai/synotech-flags/discussions)

---

<div align="center">
  Made with ❤️ by <a href="https://synotech.cloud">Synotech</a>
</div>
