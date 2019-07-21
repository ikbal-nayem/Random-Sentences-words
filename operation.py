import re, string
from numpy import random

class processing:
    def __init__(self, text):
        self.text = text

    def random_words(self, number):
        wordList = self.word_list()
        return random.choice(wordList, number, replace=False) if len(wordList)>=number else False

    def random_sentences(self, number):
        senList = self.sentence_list()
        return random.choice(senList, number, replace=False) if len(senList)>=number else False
    
    def word_list(self):
        wordList = re.sub('['+string.punctuation+']', ' ', self.text).split(' ')
        for i, word in enumerate(wordList):
            if len(word)==1 or word=='':
                del wordList[i]
        return list(set(wordList))
    
    def sentence_list(self):
        import nltk.data
        tokenizer = nltk.data.load('tokenizers/punkt/english.pickle')
        sentenceList = tokenizer.tokenize(self.text)
        return sentenceList

