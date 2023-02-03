import requests
from bs4 import BeautifulSoup

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



