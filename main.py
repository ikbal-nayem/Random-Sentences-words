import eel
from operation import processing

eel.init('web')

PROCESS = []

@eel.expose
def ready(text):
    process = processing(text)
    sl = len(process.sentence_list())
    wl = len(process.word_list())
    PROCESS.append(process)
    return wl, sl

@eel.expose
def random_list(list_name, number):
    fu = 'PROCESS[0].random_'+list_name+'({})'.format(number)
    return list(eval(fu))


eel.start('index.html', size=(1050, 600))