function validateName(name) {
    if (name === '' || name === null) {
        throw new Error('[이름]은 반드시 입력되어야 합니다.')
    }
}

function validatePhone(phone) {
    const regex = /^[0-9]+$/; 

    if (phone === '' || phone === null) {
        throw new Error('[휴대전화 번호]는 반드시 입력되어야 합니다.')
    }

    if (phone.length != 11) {
        throw new Error('[휴대전화 번호]는 반드시 11자리를 입력하여야 합니다.')
    }

    if (!regex.test(phone)) {
        throw new Error('[휴대전화 번호]는 반드시 숫자만 입력하여야 합니다.')
    }
}

function validateCompany(company) {
    if (company === '' || company === null) {
        throw new Error('[회사명]은 반드시 입력되어야 합니다.')
    }
}

function validateDepartment(department) {
    if (department === '' || department === null) {
        throw new Error('[부서명]은 반드시 입력되어야 합니다.')
    }
}

function validatePosition(position) {
    if (position === '' || position === null) {
        throw new Error('[직급]은 반드시 입력되어야 합니다.')
    }
}

function validateComment(comment) {
    if (comment.length > 200) {
        throw new Error('[세이플리에게 한마디]는 200자 이내로 작성해야 합니다.')
    }
}

function validatePrivacyPolicy(privacyPolicy) {
    if (privacyPolicy !== "O") {
        throw new Error('[개인정보수집 이용 및 마케팅 활용]에 반드시 동의하여야 합니다.')
    }
}

export function validateForm({name, phone, company, department, position, comment, privacyPolicy}) {
    validateName(name);
    validatePhone(phone);
    validateCompany(company);
    validateDepartment(department);
    validatePosition(position);
    validateComment(comment);
    validatePrivacyPolicy(privacyPolicy);
}