export default {
    preset: 'ts-jest/presets/default-esm',
    testEnvironment: 'jsdom',
    useESM: true,
    moduleNameMapper: {
        '^~(.*)$': '<rootDir>/src$1',
        '^@/(.*)$': '<rootDir>/src$1'
    },
    transform: {
        '^.+\\.vue$': '@vue/vue3-jest',
        '^.+\\.tsx?$': ['ts-jest', { tsconfig: './tsconfig.json' }]
    },
    moduleFileExtensions: ['js', 'ts', 'json', 'vue'],
    transformIgnorePatterns: [
        'node_modules/(?!(vuelidate|axios|sweetalert2)/)'
    ],
    testMatch: ['<rootDir>/src/**/*.{test,spec}.{js,ts,vue}']
}