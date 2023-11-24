const roleOptions = [
    {
        title: "I'm currently studying",
        value: "Student",
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                viewBox="0 0 31 31"
                fill="none"
            >
                <path
                    d="M29.8035 5.3769L15.6769 0.66804C15.4352 0.58748 15.174 0.58748 14.9323 0.66804L0.805729 5.3769C0.571324 5.45504 0.367448 5.60496 0.222984 5.80541C0.0785191 6.00587 0.000790407 6.2467 0.000808719 6.49378V18.2659C0.000808719 18.5782 0.124836 18.8776 0.345607 19.0984C0.566378 19.3191 0.865807 19.4432 1.17802 19.4432C1.49024 19.4432 1.78967 19.3191 2.01044 19.0984C2.23121 18.8776 2.35524 18.5782 2.35524 18.2659V8.12717L7.29807 9.7738C5.98482 11.8954 5.56722 14.4515 6.13695 16.8808C6.70668 19.3101 8.21717 21.414 10.3368 22.7305C7.68802 23.7694 5.39834 25.6485 3.72375 28.2178C3.63666 28.3473 3.57617 28.4927 3.54579 28.6457C3.51541 28.7988 3.51575 28.9563 3.54679 29.1092C3.57783 29.2621 3.63895 29.4073 3.7266 29.5364C3.81425 29.6654 3.92668 29.7758 4.05735 29.861C4.18802 29.9462 4.33433 30.0046 4.48778 30.0328C4.64122 30.061 4.79874 30.0584 4.95117 30.0252C5.1036 29.992 5.24791 29.9288 5.37571 29.8393C5.5035 29.7498 5.61224 29.6358 5.69559 29.5039C7.91317 26.1018 11.4154 24.152 15.3046 24.152C19.1938 24.152 22.696 26.1018 24.9136 29.5039C25.0863 29.7605 25.353 29.9389 25.6561 30.0004C25.9592 30.062 26.2744 30.0018 26.5335 29.8328C26.7925 29.6638 26.9747 29.3997 27.0406 29.0975C27.1064 28.7953 27.0507 28.4793 26.8855 28.2178C25.2109 25.6485 22.9124 23.7694 20.2725 22.7305C22.39 21.414 23.8991 19.3115 24.4687 16.884C25.0383 14.4565 24.6221 11.9022 23.3111 9.78116L29.8035 7.61802C30.0379 7.53993 30.2419 7.39003 30.3864 7.18957C30.5309 6.98911 30.6087 6.74826 30.6087 6.50114C30.6087 6.25402 30.5309 6.01317 30.3864 5.81271C30.2419 5.61225 30.0379 5.46235 29.8035 5.38426V5.3769ZM22.3679 14.7343C22.3682 15.851 22.1038 16.9518 21.5963 17.9465C21.0887 18.9412 20.3526 19.8013 19.4483 20.4564C18.544 21.1115 17.4972 21.5429 16.3939 21.7151C15.2906 21.8873 14.1622 21.7955 13.1012 21.4471C12.0403 21.0988 11.077 20.5038 10.2905 19.7112C9.50404 18.9185 8.91669 17.9506 8.57669 16.8869C8.23668 15.8233 8.15371 14.6942 8.33458 13.5922C8.51545 12.4903 8.95501 11.447 9.61718 10.5478L14.9323 12.3136C15.174 12.3942 15.4352 12.3942 15.6769 12.3136L20.992 10.5478C21.8864 11.7603 22.3686 13.2276 22.3679 14.7343Z"
                    fill="#456FF6"
                />
            </svg>
        ),
        nextPage: "select-college"
    },
    {
        title: "I'm a working professional",
        value: "Mentor",
        icon: (
            <svg
                width="25"
                height="25"
                viewBox="0 0 31 29"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M28.356 5.31647H22.4699V4.13925C22.4699 3.2026 22.0978 2.30431 21.4355 1.642C20.7732 0.979688 19.8749 0.607605 18.9382 0.607605H11.875C10.9383 0.607605 10.04 0.979688 9.3777 1.642C8.71539 2.30431 8.3433 3.2026 8.3433 4.13925V5.31647H2.45723C1.8328 5.31647 1.23394 5.56452 0.792395 6.00606C0.350854 6.4476 0.102798 7.04646 0.102798 7.6709V26.5063C0.102798 27.1308 0.350854 27.7296 0.792395 28.1712C1.23394 28.6127 1.8328 28.8608 2.45723 28.8608H28.356C28.9804 28.8608 29.5793 28.6127 30.0208 28.1712C30.4623 27.7296 30.7104 27.1308 30.7104 26.5063V7.6709C30.7104 7.04646 30.4623 6.4476 30.0208 6.00606C29.5793 5.56452 28.9804 5.31647 28.356 5.31647ZM10.6977 4.13925C10.6977 3.82703 10.8218 3.5276 11.0425 3.30683C11.2633 3.08606 11.5627 2.96204 11.875 2.96204H18.9382C19.2505 2.96204 19.5499 3.08606 19.7707 3.30683C19.9914 3.5276 20.1155 3.82703 20.1155 4.13925V5.31647H10.6977V4.13925ZM28.356 7.6709V18.2658H2.45723V7.6709H28.356Z"
                    fill="#456FF6"
                />
            </svg>
        ),
        nextPage: "select-company"
    },
    {
        title: "I'm currently an enabler",
        value: "Enabler",
        icon: (
            <svg
                width="25"
                height="25"
                viewBox="0 0 39 38"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M32.2548 6.02531H6.35608C5.73164 6.02531 5.13279 6.27336 4.69124 6.7149C4.2497 7.15644 4.00165 7.7553 4.00165 8.37974V29.5696C4.00165 30.194 4.2497 30.7929 4.69124 31.2344C5.13279 31.676 5.73164 31.924 6.35608 31.924H8.32644C8.54924 31.9241 8.76748 31.861 8.95581 31.7419C9.14414 31.6229 9.29483 31.4528 9.39035 31.2516C9.9628 30.043 10.8666 29.0217 11.9966 28.3066C13.1267 27.5914 14.4365 27.2118 15.7738 27.2118C17.1111 27.2118 18.4209 27.5914 19.551 28.3066C20.681 29.0217 21.5848 30.043 22.1572 31.2516C22.2528 31.4528 22.4035 31.6229 22.5918 31.7419C22.7801 31.861 22.9984 31.9241 23.2212 31.924H32.2548C32.8792 31.924 33.4781 31.676 33.9196 31.2344C34.3612 30.7929 34.6092 30.194 34.6092 29.5696V8.37974C34.6092 7.7553 34.3612 7.15644 33.9196 6.7149C33.4781 6.27336 32.8792 6.02531 32.2548 6.02531ZM15.7738 24.8608C14.8425 24.8608 13.9321 24.5846 13.1577 24.0672C12.3833 23.5497 11.7798 22.8143 11.4234 21.9539C11.067 21.0935 10.9737 20.1467 11.1554 19.2332C11.3371 18.3198 11.7856 17.4808 12.4441 16.8222C13.1027 16.1637 13.9417 15.7152 14.8551 15.5335C15.7686 15.3518 16.7154 15.4451 17.5758 15.8015C18.4362 16.1579 19.1717 16.7614 19.6891 17.5358C20.2065 18.3102 20.4827 19.2206 20.4827 20.1519C20.4827 21.4008 19.9866 22.5985 19.1035 23.4816C18.2204 24.3646 17.0227 24.8608 15.7738 24.8608ZM32.2548 29.5696H23.9304C23.4172 28.6847 22.7631 27.8895 21.9939 27.2152H28.7232C29.0354 27.2152 29.3348 27.0912 29.5556 26.8704C29.7764 26.6496 29.9004 26.3502 29.9004 26.038V11.9114C29.9004 11.5992 29.7764 11.2997 29.5556 11.079C29.3348 10.8582 29.0354 10.7342 28.7232 10.7342H9.88772C9.57551 10.7342 9.27608 10.8582 9.05531 11.079C8.83454 11.2997 8.71051 11.5992 8.71051 11.9114V26.038C8.71038 26.2991 8.79704 26.5528 8.95687 26.7592C9.1167 26.9657 9.34063 27.1131 9.59342 27.1784C8.80647 27.8602 8.13858 28.6683 7.61717 29.5696H6.35608V8.37974H32.2548V29.5696Z"
                    fill="#456FF6"
                />
            </svg>
        ),
        nextPage: "select-college"
    },
    {
        title: "I'm a graduate",
        value: "Graduate",
        icon: (
            <svg
                width="25"
                height="25"
                viewBox="0 0 32 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M21.9997 22.9048C22.6895 22.633 23.358 22.3101 23.9997 21.9386V26.9998C23.9997 27.2651 23.8943 27.5194 23.7068 27.7069C23.5193 27.8945 23.2649 27.9998 22.9997 27.9998C22.7345 27.9998 22.4801 27.8945 22.2926 27.7069C22.105 27.5194 21.9997 27.2651 21.9997 26.9998V22.9048ZM23.4697 11.8511L16.4697 8.11733C16.2361 7.99804 15.9651 7.97527 15.7149 8.05392C15.4647 8.13257 15.2555 8.30635 15.1322 8.53782C15.0089 8.76929 14.9815 9.03992 15.0558 9.29141C15.1302 9.54289 15.3004 9.75511 15.5297 9.88233L21.3747 12.9998L23.4997 11.8673L23.4697 11.8511ZM31.4697 8.11733L16.4697 0.117334C16.325 0.0402935 16.1636 0 15.9997 0C15.8358 0 15.6744 0.0402935 15.5297 0.117334L0.529688 8.11733C0.369693 8.2026 0.235888 8.32976 0.142587 8.4852C0.0492867 8.64065 0 8.81854 0 8.99983C0 9.18113 0.0492867 9.35902 0.142587 9.51446C0.235888 9.66991 0.369693 9.79707 0.529688 9.88233L3.99969 11.7336V17.7861C3.99865 18.2773 4.17942 18.7515 4.50719 19.1173C6.14469 20.9411 9.81344 23.9998 15.9997 23.9998C18.0509 24.0168 20.0867 23.6453 21.9997 22.9048V13.3336L21.3747 12.9998L15.9997 15.8661L5.47844 10.2498L3.12469 8.99983L15.9997 2.13358L28.8747 8.99983L26.5272 10.2498H26.5197L23.4997 11.8673C23.6517 11.9551 23.778 12.0814 23.8658 12.2335C23.9535 12.3855 23.9997 12.558 23.9997 12.7336V21.9386C25.3037 21.1858 26.4821 20.2339 27.4922 19.1173C27.82 18.7515 28.0007 18.2773 27.9997 17.7861V11.7336L31.4697 9.88233C31.6297 9.79707 31.7635 9.66991 31.8568 9.51446C31.9501 9.35902 31.9994 9.18113 31.9994 8.99983C31.9994 8.81854 31.9501 8.64065 31.8568 8.4852C31.7635 8.32976 31.6297 8.2026 31.4697 8.11733Z"
                    fill="#456FF6"
                />
            </svg>
        )
        // nextPage: "select-college"
    },
    {
        title: "I'm a freelancer",
        value: "Freelance",
        icon: (
            <svg
                width="29"
                height="29"
                viewBox="0 0 29 29"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M21.75 3.625C20.7886 3.625 19.8666 4.00692 19.1867 4.68674C18.5069 5.36656 18.125 6.28859 18.125 7.25V21.75C18.125 22.7114 18.5069 23.6334 19.1867 24.3133C19.8666 24.9931 20.7886 25.375 21.75 25.375C22.7114 25.375 23.6334 24.9931 24.3133 24.3133C24.9931 23.6334 25.375 22.7114 25.375 21.75C25.375 20.7886 24.9931 19.8666 24.3133 19.1867C23.6334 18.5069 22.7114 18.125 21.75 18.125H7.25C6.28859 18.125 5.36656 18.5069 4.68674 19.1867C4.00692 19.8666 3.625 20.7886 3.625 21.75C3.625 22.7114 4.00692 23.6334 4.68674 24.3133C5.36656 24.9931 6.28859 25.375 7.25 25.375C8.21141 25.375 9.13344 24.9931 9.81326 24.3133C10.4931 23.6334 10.875 22.7114 10.875 21.75V7.25C10.875 6.28859 10.4931 5.36656 9.81326 4.68674C9.13344 4.00692 8.21141 3.625 7.25 3.625C6.28859 3.625 5.36656 4.00692 4.68674 4.68674C4.00692 5.36656 3.625 6.28859 3.625 7.25C3.625 8.21141 4.00692 9.13344 4.68674 9.81326C5.36656 10.4931 6.28859 10.875 7.25 10.875H21.75C22.7114 10.875 23.6334 10.4931 24.3133 9.81326C24.9931 9.13344 25.375 8.21141 25.375 7.25C25.375 6.28859 24.9931 5.36656 24.3133 4.68674C23.6334 4.00692 22.7114 3.625 21.75 3.625Z"
                    stroke="#456FF6"
                    stroke-width="2.41667"
                    stroke-linecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        ),
        nextPage: "select-company"
    },
    {
        title: "Not studying or working",
        value: "Other",
        icon: (
            <svg
                width="35"
                height="35"
                viewBox="0 0 32 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M24.1667 25.375V22.9583C24.1667 21.6765 23.6575 20.4471 22.751 19.5407C21.8446 18.6342 20.6152 18.125 19.3333 18.125H9.66668C8.3848 18.125 7.15542 18.6342 6.24899 19.5407C5.34257 20.4471 4.83334 21.6765 4.83334 22.9583V25.375"
                    stroke="#456FF6"
                    strokeWidth="2.41667"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M14.5 13.2917C17.1694 13.2917 19.3333 11.1277 19.3333 8.45833C19.3333 5.78896 17.1694 3.625 14.5 3.625C11.8306 3.625 9.66666 5.78896 9.66666 8.45833C9.66666 11.1277 11.8306 13.2917 14.5 13.2917Z"
                    stroke="#456FF6"
                    strokeWidth="2.41667"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        )
    }
];

export default roleOptions;
