import firebase_admin
import re
from firebase_admin import credentials
from firebase_admin import firestore

cred = credentials.Certificate('bookmill-efd23-firebase-adminsdk-kol4j-6c8b1b2813.json')
default_app = firebase_admin.initialize_app(cred)

db = firestore.client()

classes = [line.rstrip('\n') for line in open('updatedTextbook.txt')]

str = 'AAAS 2000 001 ; AFRICAN AMERICAN ISSUES (CL), ROBERTS; EDITION:   06; PUBLISHER:   ABC CLIO; ISBN:   9780313332401; AFRICAN AMERICAN VOICES, MINTZ; EDITION:   (4TH)09; PUBLISHER:   WILEY; ISBN:   9781405182676'

#Regular expression to split the information up so that it may be stored into the firestore
y = re.search('([^;]+);([^;]+);\\s*EDITION:\\s*([^;]+);\\s*PUBLISHER:\\s*([^;]+);\\s+ISBN:\\s*([0-9]*)', str)
if not(y is None):
        print(y.groups())
print(str)

data = {
        'subject' : '', 'class' : '', 'section' : '', 'edition' : '', 'publisher' : '', 'isbn' : '', 'name' : ''
}

for s in classes:
	y = re.search('([^;]+);([^;]+);\\s*EDITION:\\s*([^;]+);\\s*PUBLISHER:\\s*([^;]+);\\s+ISBN:\\s*([0-9]*)', s)
	print(s)
	if not(y is None):
		temp = y.group(1).split(' ')
		data['subject'] = temp[0].strip()
		data['class'] = temp[1].strip()
		data['section'] = temp[2].strip()
		data['name'] = y.group(2).strip()
		data['edition'] = y.group(3).strip()
		data['publisher'] = y.group(4).strip()
		data['isbn'] = y.group(5).strip()
		print(data)
		doc_ref = db.collection('textbooks').document(y.group(2))
		doc_ref.set(data)			




#Testing
#for s in classes:
#       x = re.search('([^;]+);([^;]+);([^;]+);([^;]+);\\s+(ISBN:\\s*[0-9]*)', s)
#       if not(x is None):
#               print(x.groups())
#       print(s)


#for s in classes:
#       x = re.search('([a-zA-Z0-9 ]+);([^;].*);', s)
#       if not(x is None):
#               print(x.group(1))
#               print(x.group(2))
#       print(s)

#data = {
#        'subject' : '', 'class' : '', 'section' : '', 'edition' : '', 'publisher' : '', 'isbn' : '', 'name' : ''
#}
#
#temp = y.group(1).split(' ')
#print(temp)
#data['subject'] = temp[0].strip()
#data['class'] = temp[1].strip()
#data['section'] = temp[2].strip()
#data['name'] = y.group(2).strip()
#data['edition'] = y.group(3).strip()
#data['publisher'] = y.group(4).strip()
#data['isbn'] = y.group(5).strip()
#
#doc_ref = db.collection('textbooks').document(y.group(2))
#doc_ref.set(data)
