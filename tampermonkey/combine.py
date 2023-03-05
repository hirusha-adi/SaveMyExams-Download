import os
import PyPDF2

pdfs = []

pdfiles = []
for file in os.listdir():
    if file.endswith(".pdf") and not (file == "final.pdf"):
        pdfiles.append(file)
        print(file)

pdfMerge = PyPDF2.PdfMerger()

for filename in pdfiles:
    pdfFile = open(filename, 'rb')
    pdfReader = PyPDF2.PdfReader(pdfFile)
    pdfMerge.append(pdfReader)

pdfFile.close()
pdfMerge.write('final.pdf')
