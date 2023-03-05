import os
import PyPDF2

current_folder = os.path.split(os.getcwd())[-1]

pdfs = []
pdfiles = []
for file in os.listdir(os.getcwd()):
    if file.endswith(".pdf") and not (file == current_folder):
        pdfiles.append(file)
        print(file)

if len(pdfiles) == 0:
    print("[ERROR] No .pdf files in Current Working Directory")
    input("Press [ENTER] to exit.")
    exit()

filename = ""
ufname = input(f"[?] Save File Name <{current_folder}> [Yes/Custom]\n: ")
if not (ufname == 'y' or ufname == 'Y' or ufname == 'Yes' or ufname == 'yes'):
    ufname == filename

if not filename.endswith('.pdf'):
    filename += '.pdf'

pdfMerge = PyPDF2.PdfMerger()

print("[+] Merging in the current order: ")
count = 1
for open_file in pdfiles:
    print(f'[{count}] - {open_file}')
    pdfFile = open(open_file, 'rb')
    pdfReader = PyPDF2.PdfReader(pdfFile)
    pdfMerge.append(pdfReader)

pdfFile.close()
pdfMerge.write(filename)
input("[+] Merged everything successfully!\nPress [ENTER] to exit.")
