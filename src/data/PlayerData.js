const Players = [
    {
        title: 'RedApple', gWins: 16, gLosses: 8, mWins: 7, mLosses: 2, matchUps: [
            {
                title: 'Captain-Hook',
                games: [
                    {title: 'Captain-Hook', wins: 10, losses: 10},
                    {title: 'Jafar', wins: 13, losses: 14},
                    {title: 'Maleficent', wins: 18, losses: 13},
                    {title: 'Prince-John', wins: 17, losses: 8},
                    {title: 'Queen-of-Hearts', wins: 16, losses: 11},
                    {title: 'Ursula', wins: 10, losses: 4},
                    {title: 'Dr.-Facilier', wins: 36, losses: 29},
                    {title: 'Evil-Queen', wins: 23, losses: 13},
                    {title: 'Hades', wins: 3, losses: 1},
                    {title: 'Ratigan', wins: 30, losses: 32},
                    {title: 'Scar', wins: 4, losses: 4},
                    {title: 'Yzma', wins: 13, losses: 10},
                    {title: 'Cruella-De-Vil', wins: 4, losses: 1},
                    {title: 'Mother-Gothel', wins: 11, losses: 2},
                    {title: 'Pete', wins: 11, losses: 5}
                ]
            },
            {
                title: 'Jafar',
                games: [
                    {title: 'Captain-Hook', wins:14, losses:13},
                    {title: 'Jafar', wins:8, losses:8},
                    {title: 'Maleficent', wins:7, losses:5},
                    {title: 'Prince-John', wins:7, losses:3},
                    {title: 'Queen-of-Hearts', wins:10, losses:18},
                    {title: 'Ursula', wins:2, losses:1},
                    {title: 'Dr.-Facilier', wins:15, losses:37},
                    {title: 'Evil-Queen', wins:8, losses:14},
                    {title: 'Hades', wins:4, losses:3},
                    {title: 'Ratigan', wins:10, losses:22},
                    {title: 'Scar', wins:6, losses:2},
                    {title: 'Yzma', wins:13, losses:10},
                    {title: 'Cruella-De-Vil', wins:4, losses:1},
                    {title: 'Mother-Gothel', wins:6, losses:1},
                    {title: 'Pete', wins:12, losses:6}
                ]
            },
            {
                title: 'Maleficent',
                games: [
                    {title: 'Captain-Hook', wins:13, losses:18},
                    {title: 'Jafar', wins:5, losses:7},
                    {title: 'Maleficent', wins:2, losses:2},
                    {title: 'Prince-John', wins:3, losses:5},
                    {title: 'Queen-of-Hearts', wins:7, losses:5},
                    {title: 'Ursula', wins:11, losses:2},
                    {title: 'Dr.-Facilier', wins:10, losses:12},
                    {title: 'Evil-Queen', wins:15, losses:8},
                    {title: 'Hades', wins:2, losses:4},
                    {title: 'Ratigan', wins:13, losses:11},
                    {title: 'Scar', wins:9, losses:1},
                    {title: 'Yzma', wins:8, losses:10},
                    {title: 'Cruella-De-Vil', wins:7, losses:3},
                    {title: 'Mother-Gothel', wins:4, losses:3},
                    {title: 'Pete', wins:12, losses:3}
                ]
            },
            {
                title: 'Prince-John',
                games: [
                    {title: 'Captain-Hook', wins:8, losses:7},
                    {title: 'Jafar', wins:3, losses:7},
                    {title: 'Maleficent', wins:5, losses:3},
                    {title: 'Prince-John', wins:5, losses:5},
                    {title: 'Queen-of-Hearts', wins:7, losses:5},
                    {title: 'Ursula', wins:1, losses:3},
                    {title: 'Dr.-Facilier', wins:6, losses:12},
                    {title: 'Evil-Queen', wins:9, losses:9},
                    {title: 'Hades', wins:5, losses:5},
                    {title: 'Ratigan', wins:5, losses:12},
                    {title: 'Scar', wins:2, losses:1},
                    {title: 'Yzma', wins:6, losses:7},
                    {title: 'Cruella-De-Vil', wins:4, losses:3},
                    {title: 'Mother-Gothel', wins:3, losses:4},
                    {title: 'Pete', wins:4, losses:2}
                ]
            },
            {
                title: 'Queen-of-Hearts',
                games: [
                    {title: 'Captain-Hook', wins:11, losses:16},
                    {title: 'Jafar', wins:18, losses:10},
                    {title: 'Maleficent', wins:2, losses:11},
                    {title: 'Prince-John', wins:5, losses:7},
                    {title: 'Queen-of-Hearts', wins:15, losses:15},
                    {title: 'Ursula', wins:2, losses:6},
                    {title: 'Dr.-Facilier', wins:11, losses:15},
                    {title: 'Evil-Queen', wins:13, losses:18},
                    {title: 'Hades', wins:6, losses:3},
                    {title: 'Ratigan', wins:12, losses:18},
                    {title: 'Scar', wins:6, losses:5},
                    {title: 'Yzma', wins:10, losses:14},
                    {title: 'Cruella-De-Vil', wins:2, losses:4},
                    {title: 'Mother-Gothel', wins:8, losses:2},
                    {title: 'Pete', wins:7, losses:5}
                ]
            },
            {
                title: 'Ursula',
                games: [
                    {title: 'Captain-Hook', wins:4, losses:10},
                    {title: 'Jafar', wins:1, losses:2},
                    {title: 'Maleficent', wins:5, losses:3},
                    {title: 'Prince-John', wins:3, losses:1},
                    {title: 'Queen-of-Hearts', wins:6, losses:2},
                    {title: 'Ursula', wins:2, losses:2},
                    {title: 'Dr.-Facilier', wins:7, losses:14},
                    {title: 'Evil-Queen', wins:6, losses:3},
                    {title: 'Hades', wins:2, losses:1},
                    {title: 'Ratigan', wins:4, losses:12},
                    {title: 'Scar', wins:5, losses:0},
                    {title: 'Yzma', wins:7, losses:5},
                    {title: 'Cruella-De-Vil', wins:1, losses:1},
                    {title: 'Mother-Gothel', wins:7, losses:2},
                    {title: 'Pete', wins:3, losses:2}
                ]
            },
            {
                title: 'Dr.-Facilier',
                games: [
                    {title: 'Captain-Hook', wins:0, losses:0},
                    {title: 'Jafar', wins:0, losses:0},
                    {title: 'Maleficent', wins:0, losses:0},
                    {title: 'Prince-John', wins:0, losses:0},
                    {title: 'Queen-of-Hearts', wins:0, losses:0},
                    {title: 'Ursula', wins:0, losses:0},
                    {title: 'Dr.-Facilier', wins:0, losses:0},
                    {title: 'Evil-Queen', wins:0, losses:0},
                    {title: 'Hades', wins:0, losses:0},
                    {title: 'Ratigan', wins:0, losses:0},
                    {title: 'Scar', wins:0, losses:0},
                    {title: 'Yzma', wins:0, losses:0},
                    {title: 'Cruella-De-Vil', wins:0, losses:0},
                    {title: 'Mother-Gothel', wins:0, losses:0},
                    {title: 'Pete', wins:0, losses:0}
                ]
            },
            {
                title: 'Evil-Queen',
                games: [
                    {title: 'Captain-Hook', wins:13, losses:23},
                    {title: 'Jafar', wins:14, losses:8},
                    {title: 'Maleficent', wins:8, losses:15},
                    {title: 'Prince-John', wins:9, losses:9},
                    {title: 'Queen-of-Hearts', wins:18, losses:13},
                    {title: 'Ursula', wins:3, losses:6},
                    {title: 'Dr.-Facilier', wins:17, losses:24},
                    {title: 'Evil-Queen', wins:9, losses:9},
                    {title: 'Hades', wins:4, losses:5},
                    {title: 'Ratigan', wins:17, losses:20},
                    {title: 'Scar', wins:4, losses:3},
                    {title: 'Yzma', wins:22, losses:6},
                    {title: 'Cruella-De-Vil', wins:2, losses:1},
                    {title: 'Mother-Gothel', wins:10, losses:1},
                    {title: 'Pete', wins:6, losses:5}
                ]
            },
            {
                title: 'Hades',
                games: [
                    {title: 'Captain-Hook', wins:1, losses:3},
                    {title: 'Jafar', wins:3, losses:4},
                    {title: 'Maleficent', wins:4, losses:2},
                    {title: 'Prince-John', wins:5, losses:5},
                    {title: 'Queen-of-Hearts', wins:3, losses:6},
                    {title: 'Ursula', wins:1, losses:2},
                    {title: 'Dr.-Facilier', wins:1, losses:8},
                    {title: 'Evil-Queen', wins:5, losses:4},
                    {title: 'Hades', wins:1, losses:1},
                    {title: 'Ratigan', wins:6, losses:11},
                    {title: 'Scar', wins:4, losses:7},
                    {title: 'Yzma', wins:7, losses:4},
                    {title: 'Cruella-De-Vil', wins:2, losses:1},
                    {title: 'Mother-Gothel', wins:3, losses:4},
                    {title: 'Pete', wins:5, losses:3}
                ]
            },
            {
                title: 'Ratigan',
                games: [
                    {title: 'Captain-Hook', wins:32, losses:30},
                    {title: 'Jafar', wins:22, losses:10},
                    {title: 'Maleficent', wins:11, losses:13},
                    {title: 'Prince-John', wins:12, losses:5},
                    {title: 'Queen-of-Hearts', wins:18, losses:12},
                    {title: 'Ursula', wins:12, losses:4},
                    {title: 'Dr.-Facilier', wins:29, losses:32},
                    {title: 'Evil-Queen', wins:20, losses:17},
                    {title: 'Hades', wins:11, losses:6},
                    {title: 'Ratigan', wins:21, losses:21},
                    {title: 'Scar', wins:13, losses:2},
                    {title: 'Yzma', wins:21, losses:12},
                    {title: 'Cruella-De-Vil', wins:4, losses:2},
                    {title: 'Mother-Gothel', wins:13, losses:2},
                    {title: 'Pete', wins:20, losses:6}
                ]
            },
            {
                title: 'Scar',
                games: [
                    {title: 'Captain-Hook', wins:4, losses:4},
                    {title: 'Jafar', wins:2, losses:6},
                    {title: 'Maleficent', wins:1, losses:9},
                    {title: 'Prince-John', wins:1, losses:2},
                    {title: 'Queen-of-Hearts', wins:5, losses:6},
                    {title: 'Ursula', wins:0, losses:5},
                    {title: 'Dr.-Facilier', wins:8, losses:9},
                    {title: 'Evil-Queen', wins:3, losses:4},
                    {title: 'Hades', wins:7, losses:4},
                    {title: 'Ratigan', wins:2, losses:13},
                    {title: 'Scar', wins:6, losses:6},
                    {title: 'Yzma', wins:4, losses:9},
                    {title: 'Cruella-De-Vil', wins:2, losses:3},
                    {title: 'Mother-Gothel', wins:1, losses:4},
                    {title: 'Pete', wins:3, losses:5}
                ]
            },
            {
                title: 'Yzma',
                games: [
                    {title: 'Captain-Hook', wins:10, losses:13},
                    {title: 'Jafar', wins:10, losses:13},
                    {title: 'Maleficent', wins:10, losses:8},
                    {title: 'Prince-John', wins:7, losses:6},
                    {title: 'Queen-of-Hearts', wins:14, losses:10},
                    {title: 'Ursula', wins:5, losses:7},
                    {title: 'Dr.-Facilier', wins:12, losses:17},
                    {title: 'Evil-Queen', wins:6, losses:22},
                    {title: 'Hades', wins:4, losses:7},
                    {title: 'Ratigan', wins:12, losses:21},
                    {title: 'Scar', wins:9, losses:4},
                    {title: 'Yzma', wins:6, losses:6},
                    {title: 'Cruella-De-Vil', wins:6, losses:5},
                    {title: 'Mother-Gothel', wins:9, losses:5},
                    {title: 'Pete', wins:7, losses:3}
                ]
            },
            {
                title: 'Cruella-De-Vil',
                games: [
                    {title: 'Captain-Hook', wins:2, losses:11},
                    {title: 'Jafar', wins:1, losses:6},
                    {title: 'Maleficent', wins:3, losses:4},
                    {title: 'Prince-John', wins:4, losses:3},
                    {title: 'Queen-of-Hearts', wins:2, losses:8},
                    {title: 'Ursula', wins:2, losses:7},
                    {title: 'Dr.-Facilier', wins:4, losses:11},
                    {title: 'Evil-Queen', wins:1, losses:10},
                    {title: 'Hades', wins:4, losses:3},
                    {title: 'Ratigan', wins:2, losses:13},
                    {title: 'Scar', wins:4, losses:1},
                    {title: 'Yzma', wins:5, losses:9},
                    {title: 'Cruella-De-Vil', wins:3, losses:4},
                    {title: 'Mother-Gothel', wins:2, losses:2},
                    {title: 'Pete', wins:5, losses:5}
                ]
            },
            {
                title: 'Mother-Gothel',
                games: [
                    {title: 'Captain-Hook', wins:2, losses:11},
                    {title: 'Jafar', wins:1, losses:6},
                    {title: 'Maleficent', wins:3, losses:4},
                    {title: 'Prince-John', wins:4, losses:3},
                    {title: 'Queen-of-Hearts', wins:2, losses:8},
                    {title: 'Ursula', wins:2, losses:7},
                    {title: 'Dr.-Facilier', wins:4, losses:11},
                    {title: 'Evil-Queen', wins:1, losses:10},
                    {title: 'Hades', wins:4, losses:3},
                    {title: 'Ratigan', wins:2, losses:13},
                    {title: 'Scar', wins:4, losses:1},
                    {title: 'Yzma', wins:5, losses:9},
                    {title: 'Cruella-De-Vil', wins:3, losses:4},
                    {title: 'Mother-Gothel', wins:2, losses:2},
                    {title: 'Pete', wins:5, losses:5}
                ]
            },
            {
                title: 'Pete',
                games:[
                    {title: 'Captain-Hook', wins:5, losses:11},
                    {title: 'Jafar', wins:6, losses:12},
                    {title: 'Maleficent', wins:3, losses:12},
                    {title: 'Prince-John', wins:2, losses:4},
                    {title: 'Queen-of-Hearts', wins:5, losses:7},
                    {title: 'Ursula', wins:2, losses:3},
                    {title: 'Dr.-Facilier', wins:3, losses:11},
                    {title: 'Evil-Queen', wins:5, losses:6},
                    {title: 'Hades', wins:3, losses:5},
                    {title: 'Ratigan', wins:6, losses:20},
                    {title: 'Scar', wins:5, losses:3},
                    {title: 'Yzma', wins:3, losses:7},
                    {title: 'Cruella-De-Vil', wins:3, losses:0},
                    {title: 'Mother-Gothel', wins:5, losses:5},
                    {title: 'Pete', wins:3, losses:3}
                ]
            }
        ]
    },
    {
        title: 'BrianDrums', gWins: 16, gLosses: 8, mWins: 7, mLosses: 2, matchUps: [
            {
                title: 'Captain-Hook',
                games: [
                    {title: 'Captain-Hook', wins: 10, losses: 10},
                    {title: 'Jafar', wins: 13, losses: 14},
                    {title: 'Maleficent', wins: 18, losses: 13},
                    {title: 'Prince-John', wins: 17, losses: 8},
                    {title: 'Queen-of-Hearts', wins: 16, losses: 11},
                    {title: 'Ursula', wins: 10, losses: 4},
                    {title: 'Dr.-Facilier', wins: 36, losses: 29},
                    {title: 'Evil-Queen', wins: 23, losses: 13},
                    {title: 'Hades', wins: 3, losses: 1},
                    {title: 'Ratigan', wins: 30, losses: 32},
                    {title: 'Scar', wins: 4, losses: 4},
                    {title: 'Yzma', wins: 13, losses: 10},
                    {title: 'Cruella-De-Vil', wins: 4, losses: 1},
                    {title: 'Mother-Gothel', wins: 11, losses: 2},
                    {title: 'Pete', wins: 11, losses: 5}
                ]
            },
            {
                title: 'Jafar',
                games: [
                    {title: 'Captain-Hook', wins:14, losses:13},
                    {title: 'Jafar', wins:8, losses:8},
                    {title: 'Maleficent', wins:7, losses:5},
                    {title: 'Prince-John', wins:7, losses:3},
                    {title: 'Queen-of-Hearts', wins:10, losses:18},
                    {title: 'Ursula', wins:2, losses:1},
                    {title: 'Dr.-Facilier', wins:15, losses:37},
                    {title: 'Evil-Queen', wins:8, losses:14},
                    {title: 'Hades', wins:4, losses:3},
                    {title: 'Ratigan', wins:10, losses:22},
                    {title: 'Scar', wins:6, losses:2},
                    {title: 'Yzma', wins:13, losses:10},
                    {title: 'Cruella-De-Vil', wins:4, losses:1},
                    {title: 'Mother-Gothel', wins:6, losses:1},
                    {title: 'Pete', wins:12, losses:6}
                ]
            },
            {
                title: 'Maleficent',
                games: [
                    {title: 'Captain-Hook', wins:13, losses:18},
                    {title: 'Jafar', wins:5, losses:7},
                    {title: 'Maleficent', wins:2, losses:2},
                    {title: 'Prince-John', wins:3, losses:5},
                    {title: 'Queen-of-Hearts', wins:7, losses:5},
                    {title: 'Ursula', wins:11, losses:2},
                    {title: 'Dr.-Facilier', wins:10, losses:12},
                    {title: 'Evil-Queen', wins:15, losses:8},
                    {title: 'Hades', wins:2, losses:4},
                    {title: 'Ratigan', wins:13, losses:11},
                    {title: 'Scar', wins:9, losses:1},
                    {title: 'Yzma', wins:8, losses:10},
                    {title: 'Cruella-De-Vil', wins:7, losses:3},
                    {title: 'Mother-Gothel', wins:4, losses:3},
                    {title: 'Pete', wins:12, losses:3}
                ]
            },
            {
                title: 'Prince-John',
                games: [
                    {title: 'Captain-Hook', wins:8, losses:7},
                    {title: 'Jafar', wins:3, losses:7},
                    {title: 'Maleficent', wins:5, losses:3},
                    {title: 'Prince-John', wins:5, losses:5},
                    {title: 'Queen-of-Hearts', wins:7, losses:5},
                    {title: 'Ursula', wins:1, losses:3},
                    {title: 'Dr.-Facilier', wins:6, losses:12},
                    {title: 'Evil-Queen', wins:9, losses:9},
                    {title: 'Hades', wins:5, losses:5},
                    {title: 'Ratigan', wins:5, losses:12},
                    {title: 'Scar', wins:2, losses:1},
                    {title: 'Yzma', wins:6, losses:7},
                    {title: 'Cruella-De-Vil', wins:4, losses:3},
                    {title: 'Mother-Gothel', wins:3, losses:4},
                    {title: 'Pete', wins:4, losses:2}
                ]
            },
            {
                title: 'Queen-of-Hearts',
                games: [
                    {title: 'Captain-Hook', wins:11, losses:16},
                    {title: 'Jafar', wins:18, losses:10},
                    {title: 'Maleficent', wins:2, losses:11},
                    {title: 'Prince-John', wins:5, losses:7},
                    {title: 'Queen-of-Hearts', wins:15, losses:15},
                    {title: 'Ursula', wins:2, losses:6},
                    {title: 'Dr.-Facilier', wins:11, losses:15},
                    {title: 'Evil-Queen', wins:13, losses:18},
                    {title: 'Hades', wins:6, losses:3},
                    {title: 'Ratigan', wins:12, losses:18},
                    {title: 'Scar', wins:6, losses:5},
                    {title: 'Yzma', wins:10, losses:14},
                    {title: 'Cruella-De-Vil', wins:2, losses:4},
                    {title: 'Mother-Gothel', wins:8, losses:2},
                    {title: 'Pete', wins:7, losses:5}
                ]
            },
            {
                title: 'Ursula',
                games: [
                    {title: 'Captain-Hook', wins:4, losses:10},
                    {title: 'Jafar', wins:1, losses:2},
                    {title: 'Maleficent', wins:5, losses:3},
                    {title: 'Prince-John', wins:3, losses:1},
                    {title: 'Queen-of-Hearts', wins:6, losses:2},
                    {title: 'Ursula', wins:2, losses:2},
                    {title: 'Dr.-Facilier', wins:7, losses:14},
                    {title: 'Evil-Queen', wins:6, losses:3},
                    {title: 'Hades', wins:2, losses:1},
                    {title: 'Ratigan', wins:4, losses:12},
                    {title: 'Scar', wins:5, losses:0},
                    {title: 'Yzma', wins:7, losses:5},
                    {title: 'Cruella-De-Vil', wins:1, losses:1},
                    {title: 'Mother-Gothel', wins:7, losses:2},
                    {title: 'Pete', wins:3, losses:2}
                ]
            },
            {
                title: 'Dr.-Facilier',
                games: [
                    {title: 'Captain-Hook', wins:29, losses:36},
                    {title: 'Jafar', wins:37, losses:15},
                    {title: 'Maleficent', wins:12, losses:10},
                    {title: 'Prince-John', wins:12, losses:6},
                    {title: 'Queen-of-Hearts', wins:15, losses:11},
                    {title: 'Ursula', wins:14, losses:7},
                    {title: 'Dr.-Facilier', wins:34, losses:34},
                    {title: 'Evil-Queen', wins:24, losses:17},
                    {title: 'Hades', wins:8, losses:1},
                    {title: 'Ratigan', wins:32, losses:29},
                    {title: 'Scar', wins:9, losses:8},
                    {title: 'Yzma', wins:17, losses:12},
                    {title: 'Cruella-De-Vil', wins:8, losses:3},
                    {title: 'Mother-Gothel', wins:11, losses:4},
                    {title: 'Pete', wins:11, losses:3}
                ]
            },
            {
                title: 'Evil-Queen',
                games: [
                    {title: 'Captain-Hook', wins:13, losses:23},
                    {title: 'Jafar', wins:14, losses:8},
                    {title: 'Maleficent', wins:8, losses:15},
                    {title: 'Prince-John', wins:9, losses:9},
                    {title: 'Queen-of-Hearts', wins:18, losses:13},
                    {title: 'Ursula', wins:3, losses:6},
                    {title: 'Dr.-Facilier', wins:17, losses:24},
                    {title: 'Evil-Queen', wins:9, losses:9},
                    {title: 'Hades', wins:4, losses:5},
                    {title: 'Ratigan', wins:17, losses:20},
                    {title: 'Scar', wins:4, losses:3},
                    {title: 'Yzma', wins:22, losses:6},
                    {title: 'Cruella-De-Vil', wins:2, losses:1},
                    {title: 'Mother-Gothel', wins:10, losses:1},
                    {title: 'Pete', wins:6, losses:5}
                ]
            },
            {
                title: 'Hades',
                games: [
                    {title: 'Captain-Hook', wins:1, losses:3},
                    {title: 'Jafar', wins:3, losses:4},
                    {title: 'Maleficent', wins:4, losses:2},
                    {title: 'Prince-John', wins:5, losses:5},
                    {title: 'Queen-of-Hearts', wins:3, losses:6},
                    {title: 'Ursula', wins:1, losses:2},
                    {title: 'Dr.-Facilier', wins:1, losses:8},
                    {title: 'Evil-Queen', wins:5, losses:4},
                    {title: 'Hades', wins:1, losses:1},
                    {title: 'Ratigan', wins:6, losses:11},
                    {title: 'Scar', wins:4, losses:7},
                    {title: 'Yzma', wins:7, losses:4},
                    {title: 'Cruella-De-Vil', wins:2, losses:1},
                    {title: 'Mother-Gothel', wins:3, losses:4},
                    {title: 'Pete', wins:5, losses:3}
                ]
            },
            {
                title: 'Ratigan',
                games: [
                    {title: 'Captain-Hook', wins:32, losses:30},
                    {title: 'Jafar', wins:22, losses:10},
                    {title: 'Maleficent', wins:11, losses:13},
                    {title: 'Prince-John', wins:12, losses:5},
                    {title: 'Queen-of-Hearts', wins:18, losses:12},
                    {title: 'Ursula', wins:12, losses:4},
                    {title: 'Dr.-Facilier', wins:29, losses:32},
                    {title: 'Evil-Queen', wins:20, losses:17},
                    {title: 'Hades', wins:11, losses:6},
                    {title: 'Ratigan', wins:21, losses:21},
                    {title: 'Scar', wins:13, losses:2},
                    {title: 'Yzma', wins:21, losses:12},
                    {title: 'Cruella-De-Vil', wins:4, losses:2},
                    {title: 'Mother-Gothel', wins:13, losses:2},
                    {title: 'Pete', wins:20, losses:6}
                ]
            },
            {
                title: 'Scar',
                games: [
                    {title: 'Captain-Hook', wins:4, losses:4},
                    {title: 'Jafar', wins:2, losses:6},
                    {title: 'Maleficent', wins:1, losses:9},
                    {title: 'Prince-John', wins:1, losses:2},
                    {title: 'Queen-of-Hearts', wins:5, losses:6},
                    {title: 'Ursula', wins:0, losses:5},
                    {title: 'Dr.-Facilier', wins:8, losses:9},
                    {title: 'Evil-Queen', wins:3, losses:4},
                    {title: 'Hades', wins:7, losses:4},
                    {title: 'Ratigan', wins:2, losses:13},
                    {title: 'Scar', wins:6, losses:6},
                    {title: 'Yzma', wins:4, losses:9},
                    {title: 'Cruella-De-Vil', wins:2, losses:3},
                    {title: 'Mother-Gothel', wins:1, losses:4},
                    {title: 'Pete', wins:3, losses:5}
                ]
            },
            {
                title: 'Yzma',
                games: [
                    {title: 'Captain-Hook', wins:10, losses:13},
                    {title: 'Jafar', wins:10, losses:13},
                    {title: 'Maleficent', wins:10, losses:8},
                    {title: 'Prince-John', wins:7, losses:6},
                    {title: 'Queen-of-Hearts', wins:14, losses:10},
                    {title: 'Ursula', wins:5, losses:7},
                    {title: 'Dr.-Facilier', wins:12, losses:17},
                    {title: 'Evil-Queen', wins:6, losses:22},
                    {title: 'Hades', wins:4, losses:7},
                    {title: 'Ratigan', wins:12, losses:21},
                    {title: 'Scar', wins:9, losses:4},
                    {title: 'Yzma', wins:6, losses:6},
                    {title: 'Cruella-De-Vil', wins:6, losses:5},
                    {title: 'Mother-Gothel', wins:9, losses:5},
                    {title: 'Pete', wins:7, losses:3}
                ]
            },
            {
                title: 'Cruella-De-Vil',
                games: [
                    {title: 'Captain-Hook', wins:2, losses:11},
                    {title: 'Jafar', wins:1, losses:6},
                    {title: 'Maleficent', wins:3, losses:4},
                    {title: 'Prince-John', wins:4, losses:3},
                    {title: 'Queen-of-Hearts', wins:2, losses:8},
                    {title: 'Ursula', wins:2, losses:7},
                    {title: 'Dr.-Facilier', wins:4, losses:11},
                    {title: 'Evil-Queen', wins:1, losses:10},
                    {title: 'Hades', wins:4, losses:3},
                    {title: 'Ratigan', wins:2, losses:13},
                    {title: 'Scar', wins:4, losses:1},
                    {title: 'Yzma', wins:5, losses:9},
                    {title: 'Cruella-De-Vil', wins:3, losses:4},
                    {title: 'Mother-Gothel', wins:2, losses:2},
                    {title: 'Pete', wins:5, losses:5}
                ]
            },
            {
                title: 'Mother-Gothel',
                games: [
                    {title: 'Captain-Hook', wins:2, losses:11},
                    {title: 'Jafar', wins:1, losses:6},
                    {title: 'Maleficent', wins:3, losses:4},
                    {title: 'Prince-John', wins:4, losses:3},
                    {title: 'Queen-of-Hearts', wins:2, losses:8},
                    {title: 'Ursula', wins:2, losses:7},
                    {title: 'Dr.-Facilier', wins:4, losses:11},
                    {title: 'Evil-Queen', wins:1, losses:10},
                    {title: 'Hades', wins:4, losses:3},
                    {title: 'Ratigan', wins:2, losses:13},
                    {title: 'Scar', wins:4, losses:1},
                    {title: 'Yzma', wins:5, losses:9},
                    {title: 'Cruella-De-Vil', wins:3, losses:4},
                    {title: 'Mother-Gothel', wins:2, losses:2},
                    {title: 'Pete', wins:5, losses:5}
                ]
            },
            {
                title: 'Pete',
                games:[
                    {title: 'Captain-Hook', wins:5, losses:11},
                    {title: 'Jafar', wins:6, losses:12},
                    {title: 'Maleficent', wins:3, losses:12},
                    {title: 'Prince-John', wins:2, losses:4},
                    {title: 'Queen-of-Hearts', wins:5, losses:7},
                    {title: 'Ursula', wins:2, losses:3},
                    {title: 'Dr.-Facilier', wins:3, losses:11},
                    {title: 'Evil-Queen', wins:5, losses:6},
                    {title: 'Hades', wins:3, losses:5},
                    {title: 'Ratigan', wins:6, losses:20},
                    {title: 'Scar', wins:5, losses:3},
                    {title: 'Yzma', wins:3, losses:7},
                    {title: 'Cruella-De-Vil', wins:3, losses:0},
                    {title: 'Mother-Gothel', wins:5, losses:5},
                    {title: 'Pete', wins:3, losses:3}
                ]
            }
        ]
    }
];

export default Players