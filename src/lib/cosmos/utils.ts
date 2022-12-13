import { ERROR_DESCRIPTION } from './constants';
import { Exception } from './types';

export function isObject(obj: unknown): boolean {
  return (
    typeof obj === 'object' &&
    obj !== null &&
    !(obj instanceof Array) &&
    !(obj instanceof Date)
  );
}

export function sortObject(data: any): any {
  if (Array.isArray(data)) {
    return data.map((item: any): any => sortObject(item));
  }

  if (isObject(data)) {
    const result: any = {};

    Object.keys(data)
      .sort((a: string, b: string): number => a.localeCompare(b))
      .forEach((key: string): any => (result[key] = sortObject(data[key])));

    return result;
  }

  return data;
}

export function errorCodeToString(code: number): string {
  return code in ERROR_DESCRIPTION
    ? ERROR_DESCRIPTION[code]
    : `Unknown Status Code: ${code}`;
}

export function processErrorResponse(response: Exception | any): Exception {
  if (response && isObject(response)) {
    if (Object.prototype.hasOwnProperty.call(response, 'statusCode')) {
      return {
        error_message: errorCodeToString(response.statusCode),
        return_code: response.statusCode,
      };
    }

    if (
      Object.prototype.hasOwnProperty.call(response, 'return_code') &&
      Object.prototype.hasOwnProperty.call(response, 'error_message')
    ) {
      return response;
    }
  }

  return {
    error_message: response.toString(),
    return_code: 0xffff,
  };
}

export function formatPath(path: readonly number[] | string): number[] {
  return Array.isArray(path)
    ? (path as number[])
    : (String(path).match(/\d+/g) || []).map((n: string): number => +n);
}

export function isArrayOrTypedArray(x: any): boolean {
  return (
    Array.isArray(x) ||
    (ArrayBuffer.isView(x) &&
      Object.prototype.toString.call(x) !== '[object DataView]')
  );
}
