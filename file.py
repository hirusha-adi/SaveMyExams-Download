import webbrowser, time
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By

url = "https://www.savemyexams.co.uk/a-level/maths_pure-1/cie/20/revision-notes/1-algebra--functions/1-1-quadratics/1-1-1-expanding-brackets/"

options = Options()
options.add_argument("--disable-extensions")
options.add_argument("--disable-gpu")
options.add_argument("--disable-infobars")
# options.add_argument("--headless")
options.add_argument("--disable-impl-side-painting")
options.add_argument("--no-sandbox")
options.add_argument("--disable-setuid-sandbox")
options.add_argument("--disable-software-rasterizer")
options.add_argument("--disable-webgl")
options.add_argument("--ignore-certificate-errors")
options.add_argument("--remote-debugging-port=0")
options.add_argument("--start-maximized")

driver = webdriver.Chrome(options=options)
driver.get(url)

classes = [
    "col-md-4",
    "fixed-top.main-nav-wrap",
    "fuse-desktop-h-250.fuse-mobile-h-100.mt-4",
    "resource-actions.revision-notes.row.align-items-center",
    "fuse-h-280.mb-5",
    "resource-page-buttons",
    "download-pdf-ribbon",
    "resource-author",
    "container-fluid.main-footer",
    "fixed-top.main-nav-wrap"
]

for class_name in classes:
    try:
        driver.execute_script(f"document.querySelector('.{class_name}').remove();")
    except Exception as e:
        print(f"[ERROR]: {e}")
driver.set_window_size(1920, 1080)

# screenshot = driver.get_screenshot_as_png()
# with open("screenshot.png", "wb") as f:
#     f.write(screenshot)

page_height = driver.execute_script("return document.body.scrollHeight")
counter = 0

print(f"[+] page_height: {page_height}")


while True:
    # take ss
    filename = f"screenshot_{counter}.png"
    driver.save_screenshot(filename)
    print(f"[+] Saved {filename}")
    counter += 1
    
    # scroll down
    driver.execute_script("window.scrollBy(0, window.innerHeight);") # works

    new_page_height = driver.execute_script("return document.body.scrollHeight") #
    
    print(f"[+] new_page_height: {new_page_height}")
    print(f"[+] is new_page_height == page_height: {new_page_height == page_height}")
    
    if new_page_height == page_height:
        break
    
    page_height = new_page_height
    time.sleep(1)

driver.quit()
