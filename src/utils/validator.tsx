import { STATUS_ENUM } from "../enums/StatusManager";
import { ValidationResultInterface } from "../interfaces/ValidationResultInterface";

function validateMinSymbols(
    value: string,
    min: number
): ValidationResultInterface {
    const emptyValidationResults = validateEmptyValue(value);

    if (emptyValidationResults.status !== STATUS_ENUM.Success)
        return emptyValidationResults;

    if (value.length < min) {
        return {
            statusText: `Minimum ${min} symbols required`,
            status: STATUS_ENUM.Error,
        };
    }
    return { statusText: ``, status: STATUS_ENUM.Success };
}

function validateMaxSymbols(
    value: string,
    max: number
): ValidationResultInterface {
    if (value.length > max) {
        return {
            statusText: `Maximum ${max} symbols allowed`,
            status: STATUS_ENUM.Error,
        };
    }
    return { statusText: ``, status: STATUS_ENUM.Success };
}

function validateSymbols(
    value: string,
    min: number,
    max: number
): ValidationResultInterface {
    const minValidationResults = validateMinSymbols(value, min);

    if (minValidationResults.status !== STATUS_ENUM.Success) {
        return minValidationResults;
    }

    const maxValidationResults = validateMaxSymbols(value, max);

    if (maxValidationResults.status !== STATUS_ENUM.Success) {
        return maxValidationResults;
    }

    return { statusText: ``, status: STATUS_ENUM.Success };
}

function validateMinValue(
    value: number,
    min: number
): ValidationResultInterface {
    const emptyValidationResults = validateEmptyValue(value.toString());

    if (emptyValidationResults.status !== STATUS_ENUM.Success)
        return emptyValidationResults;

    if (value < min) {
        return {
            statusText: `Value cannot be smaller when ${min}`,
            status: STATUS_ENUM.Error,
        };
    }
    return { statusText: ``, status: STATUS_ENUM.Success };
}

function validateMaxValue(
    value: number,
    max: number
): ValidationResultInterface {
    if (value > max) {
        return {
            statusText: `Value cannot be bigger when ${max}`,
            status: STATUS_ENUM.Error,
        };
    }
    return { statusText: ``, status: STATUS_ENUM.Success };
}

function validateValue(
    value: number,
    min: number,
    max: number
): ValidationResultInterface {
    const minValidationResults = validateMinValue(value, min);

    if (minValidationResults.status !== STATUS_ENUM.Success) {
        return minValidationResults;
    }

    const maxValidationResults = validateMaxValue(value, max);

    if (maxValidationResults.status !== STATUS_ENUM.Success) {
        return maxValidationResults;
    }

    return { statusText: ``, status: STATUS_ENUM.Success };
}

function validateRegex(
    regex: RegExp,
    value: string
): ValidationResultInterface {
    const emptyValidationResults = validateEmptyValue(value);

    if (emptyValidationResults.status !== STATUS_ENUM.Success) {
        return emptyValidationResults;
    }

    if (!regex.test(value)) {
        return {
            statusText: `Provided invalid value!`,
            status: STATUS_ENUM.Error,
        };
    }
    return { statusText: ``, status: STATUS_ENUM.Success };
}

function validateEmptyValue(value: string): ValidationResultInterface {
    if (!value) {
        return {
            statusText: `This field is required!`,
            status: STATUS_ENUM.Error,
        };
    }
    return { statusText: ``, status: STATUS_ENUM.Success };
}

export {
    validateMinSymbols,
    validateMaxSymbols,
    validateSymbols,
    validateMinValue,
    validateMaxValue,
    validateValue,
    validateRegex,
    validateEmptyValue,
};
