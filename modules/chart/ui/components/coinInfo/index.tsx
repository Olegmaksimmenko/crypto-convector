import { observer } from 'mobx-react';
import React, { FC, useMemo } from 'react';
import { View, Text } from 'react-native';
import { useUiContext } from '../../../../../src/UIProvider';
import { formatNumberWithDelimiters } from '../../../../../src/utils';
import { ratesModel } from '../../../../shared/entities/rates/Rates';
import { getStyle } from './styles';

export const CoinInfo: FC = observer(({ }) => {
    const { colors, t } = useUiContext();
    const styles = useMemo(() => getStyle(colors), [colors]);

    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <View style={styles.titleWrapper}>
                    <Text style={styles.title}>{t('marketCapRank')}</Text>
                </View>
                <Text style={styles.description}>#{ratesModel.firstRate?.market_cap_rank}</Text>
            </View>
            <View style={styles.row}>
                <View style={styles.titleWrapper}>
                    <Text style={styles.title}>{t('marketCap')}</Text>
                </View>
                <Text style={styles.description}>${formatNumberWithDelimiters(ratesModel.firstRate?.market_data?.market_cap?.[ratesModel.secondRate.symbol])}</Text>
            </View>
            <View style={styles.row}>
                <View style={styles.titleWrapper}>
                    <Text style={styles.title}>{t('fullyDilutedValuation')}</Text>
                </View>
                <Text style={styles.description}>${formatNumberWithDelimiters(ratesModel.firstRate?.market_data?.fully_diluted_valuation?.[ratesModel.secondRate.symbol])}</Text>
            </View>
            <View style={styles.row}>
                <View style={styles.titleWrapper}>
                    <Text style={styles.title}>{t('high24H')}</Text>
                </View>
                <Text style={styles.description}>${formatNumberWithDelimiters(ratesModel.firstRate?.market_data?.high_24h?.[ratesModel.secondRate.symbol])}</Text>
            </View>
            <View style={styles.row}>
                <View style={styles.titleWrapper}>
                    <Text style={styles.title}>{t('low24H')}</Text>
                </View>
                <Text style={styles.description}>${formatNumberWithDelimiters(ratesModel.firstRate?.market_data?.low_24h?.[ratesModel.secondRate.symbol])}</Text>
            </View>
            <View style={styles.row}>
                <View style={styles.titleWrapper}>
                    <Text style={styles.title}>{t('totalSupply')}</Text>
                </View>
                <Text style={styles.description}>{formatNumberWithDelimiters(ratesModel.firstRate?.market_data?.total_supply)}</Text>
            </View>
            <View style={styles.row}>
                <View style={styles.titleWrapper}>
                    <Text style={styles.title}>{t('maxSupply')}</Text>
                </View>
                <Text style={styles.description}>{formatNumberWithDelimiters(ratesModel.firstRate?.market_data?.max_supply)}</Text>
            </View>
        </View>
    );
});