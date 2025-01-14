import { DiagnosticSeverity, FunctionExpression, IfStatement, Range, WhileStatement } from 'brighterscript';

export enum CodeStyleError {
    InlineIfFound = 'LINT3001',
    InlineIfThenMissing = 'LINT3002',
    InlineIfThenFound = 'LINT3003',
    BlockIfThenMissing = 'LINT3004',
    BlockIfThenFound = 'LINT3005',
    ConditionGroupMissing = 'LINT3006',
    ConditionGroupFound = 'LINT3007',
    SubKeywordExpected = 'LINT3008',
    FunctionKeywordExpected = 'LINT3009',
    ReturnTypeAnnotation = 'LINT3010',
    TypeAnnotation = 'LINT3011',
    NoPrint = 'LINT3012',
    AACommaFound = 'LINT3013',
    AACommaMissing = 'LINT3014',
    NoTodo = 'LINT3015',
    NoStop = 'LINT3016',
    EolLastMissing = 'LINT3017',
    EolLastFound = 'LINT3018'
}

const CS = 'Code style:';
const ST = 'Strictness:';

export const messages = {
    addBlockIfThenKeyword: (stat: IfStatement) => ({
        severity: DiagnosticSeverity.Error,
        code: CodeStyleError.BlockIfThenMissing,
        source: 'bslint',
        message: `${CS} add 'then' keyword`,
        range: stat.tokens.if.range,
        data: stat
    }),
    removeBlockIfThenKeyword: (stat: IfStatement) => ({
        severity: DiagnosticSeverity.Error,
        code: CodeStyleError.BlockIfThenFound,
        source: 'bslint',
        message: `${CS} remove 'then' keyword`,
        range: stat.tokens.then.range,
        data: stat
    }),
    inlineIfNotAllowed: (range: Range) => ({
        severity: DiagnosticSeverity.Error,
        code: CodeStyleError.InlineIfFound,
        source: 'bslint',
        message: `${CS} no inline if statement allowed`,
        range
    }),
    addInlineIfThenKeyword: (stat: IfStatement) => ({
        severity: DiagnosticSeverity.Error,
        code: CodeStyleError.InlineIfThenMissing,
        source: 'bslint',
        message: `${CS} add 'then' keyword`,
        range: stat.tokens.if.range,
        data: stat
    }),
    removeInlineIfThenKeyword: (stat: IfStatement) => ({
        severity: DiagnosticSeverity.Error,
        code: CodeStyleError.InlineIfThenFound,
        source: 'bslint',
        message: `${CS} remove 'then' keyword`,
        range: stat.tokens.then.range,
        data: stat
    }),
    addParenthesisAroundCondition: (stat: IfStatement | WhileStatement) => ({
        severity: DiagnosticSeverity.Error,
        code: CodeStyleError.ConditionGroupMissing,
        source: 'bslint',
        message: `${CS} add parenthesis around condition`,
        range: stat.condition.range,
        data: stat
    }),
    removeParenthesisAroundCondition: (stat: IfStatement | WhileStatement) => ({
        severity: DiagnosticSeverity.Error,
        code: CodeStyleError.ConditionGroupFound,
        source: 'bslint',
        message: `${CS} remove parenthesis around condition`,
        range: stat.condition.range,
        data: stat
    }),
    expectedSubKeyword: (fun: FunctionExpression, reason: string) => ({
        severity: DiagnosticSeverity.Error,
        code: CodeStyleError.SubKeywordExpected,
        source: 'bslint',
        message: `${CS} expected 'sub' keyword ${reason}`,
        range: fun.functionType.range,
        data: fun
    }),
    expectedFunctionKeyword: (fun: FunctionExpression, reason: string) => ({
        severity: DiagnosticSeverity.Error,
        code: CodeStyleError.FunctionKeywordExpected,
        source: 'bslint',
        message: `${CS} expected 'function' keyword ${reason}`,
        range: fun.functionType.range,
        data: fun
    }),
    expectedReturnTypeAnnotation: (range: Range) => ({
        severity: DiagnosticSeverity.Error,
        code: CodeStyleError.ReturnTypeAnnotation,
        source: 'bslint',
        message: `${ST} function should declare the return type`,
        range
    }),
    expectedTypeAnnotation: (range: Range) => ({
        severity: DiagnosticSeverity.Error,
        code: CodeStyleError.TypeAnnotation,
        source: 'bslint',
        message: `${ST} type annotation required`,
        range
    }),
    noPrint: (range: Range, severity: DiagnosticSeverity) => ({
        severity: severity,
        code: CodeStyleError.NoPrint,
        source: 'bslint',
        message: `${CS} Avoid using direct Print statements`,
        range
    }),
    noTodo: (range: Range, severity: DiagnosticSeverity) => ({
        severity: severity,
        code: CodeStyleError.NoTodo,
        source: 'bslint',
        message: `${CS} Avoid using TODO comments`,
        range
    }),
    noStop: (range: Range, severity: DiagnosticSeverity) => ({
        severity: severity,
        code: CodeStyleError.NoStop,
        source: 'bslint',
        message: `${CS} STOP statements are not allowed in published applications`,
        range
    }),
    removeAAComma: (range: Range) => ({
        severity: DiagnosticSeverity.Error,
        code: CodeStyleError.AACommaFound,
        source: 'bslint',
        message: `Remove optional comma`,
        range
    }),
    addAAComma: (range: Range) => ({
        severity: DiagnosticSeverity.Error,
        code: CodeStyleError.AACommaMissing,
        source: 'bslint',
        message: `Add comma after the expression`,
        range
    }),
    addEolLast: (range: Range, preferredEol: string) => ({
        severity: DiagnosticSeverity.Error,
        code: CodeStyleError.EolLastMissing,
        source: 'bslint',
        message: `${CS} File should end with a newline`,
        range,
        data: { preferredEol }
    }),
    removeEolLast: (range: Range) => ({
        severity: DiagnosticSeverity.Error,
        code: CodeStyleError.EolLastFound,
        source: 'bslint',
        message: `${CS} File should not end with a newline`,
        range
    })
};
