import requests
import os
from bs4 import BeautifulSoup
from selenium import webdriver
from selenium.webdriver.chrome.options import Options


cwd = os.getcwd()
fdata = os.path.join(cwd, "data")
urls = []

print(f"[+] Current working directory: {cwd}")
def load_urls():
    global urls
    with open(os.path.join(cwd, "urls.txt")) as _file:
        urls = _file.readlines()

print(f"[+] Processing {len(urls)} URLs loaded from {os.path.join(cwd, 'urls.txt')}")
os.chdir(fdata)
print(f"[+] Changed working directory to: {os.getcwd()}")

r = requests.get("https://www.savemyexams.co.uk/a-level/maths_pure-1/cie/20/revision-notes/1-algebra--functions/1-1-quadratics/1-1-1-expanding-brackets/")

c = r.content
soup = BeautifulSoup(c,"html.parser")

classes = [
    "col-md-4",
    "fixed-top main-nav-wrap",
    "fuse-desktop-h-250 fuse-mobile-h-100 mt-4",
    "resource-actions revision-notes row align-items-center",
    "fuse-h-280 mb-5",
    "resource-page-buttons",
    "download-pdf-ribbon",
    "resource-author",
    "container-fluid main-footer",
    "fixed-top main-nav-wrap"
]

for class_name in classes:
    for div in soup.find_all("div", {"class":class_name}):
        div.decompose()

print(f"[+] Removed all unwanted components")

current_file = os.path.join(fdata, "now.html")

with open(current_file, "w") as f:
    f.write(str(soup))

print(f"[+] Saved file to {current_file}")

options = Options()
options.add_argument("--disable-extensions")
options.add_argument("--disable-gpu")
options.add_argument("--disable-infobars")
options.add_argument("--disable-impl-side-painting")
options.add_argument("--no-sandbox")
options.add_argument("--disable-setuid-sandbox")
options.add_argument("--disable-software-rasterizer")
options.add_argument("--disable-webgl")
options.add_argument("--ignore-certificate-errors")
options.add_argument("--remote-debugging-port=0")
options.add_argument("--start-maximized")
options.add_argument("--allow-file-access-from-files")
                     
driver = webdriver.Chrome(options=options)
driver.get(f"file://{current_file}")

driver.save_screenshot("ss.png")
driver.quit()