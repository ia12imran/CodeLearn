import type { QuestionBankSection } from "@/data/types";

import jsBasics from "./js-basics-questions.json";
import jsOperators from "./js-operators-questions.json";
import jsControlFlow from "./js-control-flow-questions.json";
import jsStrings from "./js-strings-questions.json";
import jsFunctions from "./js-functions-questions.json";
import jsArrays from "./js-arrays-questions.json";
import jsObjects from "./js-objects-questions.json";
import jsMapSet from "./js-map-set-questions.json";
import jsJsonFetch from "./js-json-fetch-questions.json";
import jsAsync from "./js-async-questions.json";
import jsClasses from "./js-classes-questions.json";
import jsDom from "./js-dom-questions.json";
import jsModules from "./js-modules-questions.json";
import jsRegex from "./js-regex-questions.json";
import jsInterview from "./js-interview-questions.json";

const splitSections: Record<string, QuestionBankSection> = {
  js_basics: jsBasics as QuestionBankSection,
  js_operators: jsOperators as QuestionBankSection,
  js_control_flow: jsControlFlow as QuestionBankSection,
  js_strings: jsStrings as QuestionBankSection,
  js_functions: jsFunctions as QuestionBankSection,
  js_arrays: jsArrays as QuestionBankSection,
  js_objects: jsObjects as QuestionBankSection,
  js_map_set: jsMapSet as QuestionBankSection,
  js_json_fetch: jsJsonFetch as QuestionBankSection,
  js_async: jsAsync as QuestionBankSection,
  js_classes: jsClasses as QuestionBankSection,
  js_dom: jsDom as QuestionBankSection,
  js_modules: jsModules as QuestionBankSection,
  js_regex: jsRegex as QuestionBankSection,
  js_interview: jsInterview as QuestionBankSection,
};

export function getSection(section: string): QuestionBankSection | undefined {
  return splitSections[section];
}