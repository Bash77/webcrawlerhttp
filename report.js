function printReport(pages) {
    console.log("========");
    console.log("REPORT");
    console.log("========");

    const sortedPages = sortPages(pages);

    for (const [url, hits] of sortedPages) {
        console.log(`Found ${hits} links on page: ${url}`);
    }

    console.log("========");
    console.log("END REPORT");
    console.log("========");
}

function sortPages(pages) {
    const pagesArr = Object.entries(pages);

    pagesArr.sort((a, b) => b[1] - a[1]);

    return pagesArr;
}

module.exports = {
    sortPages,
    printReport
};
