import Vocabulary from "./vocabulary";
import SpanishVocabulary from "./spanish-vocabulary";

const englishVocabulary = new Vocabulary()
englishVocabulary.addWord("Hello")
englishVocabulary.addWord("my name is:")
englishVocabulary.addWord("Slim Shady")
englishVocabulary.addWord("")

englishVocabulary.displayAll()

const spanishVocabulary = new SpanishVocabulary()
spanishVocabulary.addWord("Hola")
spanishVocabulary.addWord("gringo")
spanishVocabulary.addWord("que tal")
spanishVocabulary.addWord("")

spanishVocabulary.displayAll()
