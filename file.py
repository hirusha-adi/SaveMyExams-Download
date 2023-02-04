import os, time, math
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
from termcolor import colored

def printBanner():
    print(colored("""  __                     _                 
 (_   _.     _  |\/|    |_     _. ._ _   _ 
 __) (_| \/ (/_ |  | \/ |_ >< (_| | | | _> 
                     /                     
          """, 'cyan'))

def loadUrls():
    filename = os.path.join(os.getcwd(), "urls.txt")
    if not os.path.isfile(filename):
        print(colored("[-] './urls.txt' not found", 'red'))
        filename = input(colored("[?] Enter filename with URLs: ", 'yellow'))
    try:
        with open(filename, 'r') as _file:
            return _file.readlines()
    except Exception as e:
        print(colored(f"[-] {e}" ,'red'))

def loadOptions():
    options = Options()

    ynheadless = input(colored('[?] Enable Headless Mode? (recommended) [Yes/no]: ', 'yellow'))
    if ynheadless.strip().lower().startswith('y') or ynheadless.strip() == '':
        options.add_argument("--headless")
        print(colored(f"[+] Using Headless Mode", 'green'))
    else:
        print(colored(f"[+] NOT Using Headless Mode", 'green'))
        
    optionset = {
        "--disable-extensions": {
            "q": "Disable extensions?",
            "ok": "[+] Added '--disable-extensions'"
        },
        "--disable-gpu": {
            "q": "Disable GPU?",
            "ok": "[+] Added '--disable-gpu'"
        },
        "--disable-infobars": {
            "q": "Disable Info Bars?",
            "ok": "[+] Added '--disable-infobars'"
        },
        "--no-sandbox": {
            "q": "Disable Sandbox?",
            "ok": "[+] Added '--no-sandbox'"
        },
        "--disable-setuid-sandbox": {
            "q": "Disable Set UID Sandbox?",
            "ok": "[+] Added '--disable-setuid-sandbox'"
        },
        "--disable-software-rasterizer": {
            "q": "Disable Software Rasterizer?",
            "ok": "[+] Added '--disable-software-rasterizer'"
        },
        "--disable-webgl": {
            "q": "Disable WebGL?",
            "ok": "[+] Added '--disable-webgl'"
        },
        "--ignore-certificate-errors": {
            "q": "Ignore Certificate Errors?",
            "ok": "[+] Added '--ignore-certificate-errors'"
        },
        "--remote-debugging-port=0": {
            "q": "Set Remote Debugging Port to 0?",
            "ok": "[+] Added '--remote-debugging-port=0'"
        },
        "--start-maximized": {
            "q": "Start Maximized?",
            "ok": "[+] Added '--start-maximized'"
        }
    }
    
    loaddefault = input(colored('[?] Load default settings? (recommended) [Yes/no]: ', 'yellow'))
    loadall =  loaddefault.strip().lower().startswith("y") or loaddefault.strip() == ""
    for opt, dval in optionset.items():
        if loadall:
            options.add_argument(opt)
            print(colored(f"{dval['ok']}", 'green'))
        else:
            userinp = input(colored(f"[?] {dval['q']} [Yes/no]: ")).strip().lower()
            if userinp.startswith('y') or userinp == "":
                options.add_argument(opt)
                print(colored(f"{dval['ok']}", 'green'))
    
    return options
    
def saveImages(url, width, height, options):
    
    print(colored(f"[+] Starting to save:\n\tURL: {url}\n\tWidth: {width}\n\tHeight: {height}", 'green'))

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
        "container-fluid.main-footer"
    ]

    for class_name in classes:
        try:
            driver.execute_script(f"document.querySelector('.{class_name}').remove();")
        except Exception as e:
            print(f"[ERROR]: {e}")
        
    driver.set_window_size(width, height)

    current_page_title = driver.find_element(by=By.CLASS_NAME, value="resource-title").text

    page_height = driver.execute_script("return document.body.scrollHeight")
    windowinnerHeight = driver.execute_script("return window.innerHeight")
    scroll_how_many_times = math.ceil(page_height / windowinnerHeight)

    for i in range(int(scroll_how_many_times)):
        filename = f"{current_page_title}_{i}.png"
        driver.save_screenshot(filename)
        print(f"[+] Saved {filename}")
        
        driver.execute_script("window.scrollBy(0, window.innerHeight);")
        time.sleep(1)

    driver.quit()

def run():
    printBanner()
    urls = loadUrls()
    options = loadOptions()
    
    for url in urls:
        saveImages(url=url, width=1920, height=1080, options=options)

if __name__ == "__main__":
    run()
    