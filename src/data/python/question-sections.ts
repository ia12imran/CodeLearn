import type { QuestionBankSection } from "@/data/types";

import stringBasics from "./string-basics-questions.json";
import stringMethods from "./string-methods-questions.json";
import stringFormatting from "./string-formatting-questions.json";
import operatorArithmetic from "./operator-arithmetic-questions.json";
import operatorComparison from "./operator-comparison-questions.json";
import operatorLogical from "./operator-logical-questions.json";
import controlFlowIfElse from "./control-flow-if-else-questions.json";
import controlFlowForLoops from "./control-flow-for-loops-questions.json";
import controlFlowWhileLoops from "./control-flow-while-loops-questions.json";
import listBasics from "./list-basics-questions.json";
import listComprehension from "./list-comprehension-questions.json";
import functionBasics from "./function-basics-questions.json";
import functionLambda from "./function-lambda-questions.json";
import dictionaries from "./dictionary-questions.json";
import oopClassesBasics from "./oop-classes-basics-questions.json";
import oopInheritance from "./oop-inheritance-questions.json";
import errorHandling from "./error-handling-questions.json";
import fileHandling from "./file-handling-questions.json";
import questionBank from "./question-bank.json";

const splitSections: Record<string, QuestionBankSection> = {
  string_basics: stringBasics as QuestionBankSection,
  string_methods: stringMethods as QuestionBankSection,
  string_formatting: stringFormatting as QuestionBankSection,
  operator_arithmetic: operatorArithmetic as QuestionBankSection,
  operator_comparison: operatorComparison as QuestionBankSection,
  operator_logical: operatorLogical as QuestionBankSection,
  control_flow_if_else: controlFlowIfElse as QuestionBankSection,
  control_flow_for_loops: controlFlowForLoops as QuestionBankSection,
  control_flow_while_loops: controlFlowWhileLoops as QuestionBankSection,
  list_basics: listBasics as QuestionBankSection,
  list_comprehension: listComprehension as QuestionBankSection,
  function_basics: functionBasics as QuestionBankSection,
  function_lambda: functionLambda as QuestionBankSection,
  dictionaries: dictionaries as QuestionBankSection,
  oop_classes_basics: oopClassesBasics as QuestionBankSection,
  oop_inheritance: oopInheritance as QuestionBankSection,
  error_handling: errorHandling as QuestionBankSection,
  file_handling: fileHandling as QuestionBankSection,
};

const fullBank = questionBank as Record<string, QuestionBankSection>;

export function getSection(section: string): QuestionBankSection | undefined {
  return splitSections[section] ?? fullBank[section];
}