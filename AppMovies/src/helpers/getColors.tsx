import ImageColors from 'react-native-image-colors';

export const getImageColors = async (uri: string) => {
    const colors = await ImageColors.getColors(uri, {
    });

    switch (colors.platform) {
        case 'android':
            // android result properties
            return [colors.dominant, colors.average];
        case 'ios':
            // iOS result properties
            return [colors.primary, colors.secondary];
        default: ['#084f6a', '#75cedb'];
            throw new Error('Unexpected platform key');
    }

};
