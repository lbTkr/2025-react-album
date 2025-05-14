import { useState } from 'react';
import styles from './CommonNav.module.scss';

interface Navigation {
    index: number,
    path: string,
    label: string,
    searchValue: string,
    isActive: boolean,
}

function CommonNav() {
    const [navigation, setNavigation] = useState<Navigation[]>([
        {
            index:0,
            path: '/edit',
            label: "보도/편집 전용",
            searchValue: 'edit',
            isActive: false,
        },
        {
            index:1,
            path: '/following',
            label: "팔로잉",
            searchValue: 'following',
            isActive: false,
        },
        {
            index:2,
            path: '/photoPlus',
            label: "Unsplash Photo",
            searchValue: 'photo',
            isActive: false,
        },
        {
            index:3,
            path: '/oneColor',
            label: "단색",
            searchValue: 'one color',
            isActive: false,
        },
        {
            index:4,
            path: '/3dRender',
            label: "3D 랜더링",
            searchValue: '3d rendering',
            isActive: false,
        },
        {
            index:5,
            path: '/nature',
            label: "자연",
            searchValue: 'nature',
            isActive: false,
        },
        {
            index:6,
            path: '/texture',
            label: "텍스처 및 패턴",
            searchValue: 'texture',
            isActive: false,
        },
        {
            index:7,
            path: '/interior',
            label: "인테리어",
            searchValue: 'interior',
            isActive: false,
        },
        {
            index:8,
            path: '/film',
            label: "필름",
            searchValue: 'film',
            isActive: false,
        },
        {
            index:9,
            path: '/experimental',
            label: "실험적인",
            searchValue: 'experimental',
            isActive: false,
        },
        {
            index:10,
            path: '/travel',
            label: "여행",
            searchValue: 'travel',
            isActive: false,
        },
        {
            index:11,
            path: '/sports',
            label: "스포츠",
            searchValue: 'sports',
            isActive: false,
        },
    ]);

    // useState로 선언한 반응성을 가진 데이터를 기반으로 UI를 반복호출해보도록 한다.
    const navLinks = navigation.map((item : Navigation) => {
        return (
            <div className={styles.navigation__menu} key={item.path}>
                <span className={styles.navigation__menu__label}>{item.label}</span>
            </div>
        )
    })

    return (
        <div className={styles.navigation}>{navLinks}</div>
    )
}

export default CommonNav