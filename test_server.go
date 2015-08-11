package main

import (
	"html/template"
	"log"
	"net/http"
	"os"
	"path/filepath"
	"strings"
)

type FileSystem struct {
	path   string
	lookin []string
}

func (f FileSystem) Open(name string) (http.File, error) {
	filename := strings.Replace(name, f.path, "", -1)
	filename = strings.Replace(filename, "react-mdl/", "", -1)

	for _, fpath := range f.lookin {
		fpath = filepath.Join(fpath, filename)
		log.Printf("Searching for %q in %q\n", filename, fpath)

		file, err := os.Open(fpath)
		if err != nil {
			if os.IsNotExist(err) {
				continue
			}

			return nil, err
		}

		log.Printf("Found %q\n", filename)
		return file, nil
	}

	log.Printf("Did not find %q\n", filename)
	return nil, os.ErrNotExist
}

var htmlTemplates = template.Must(template.ParseFiles("test.html"))

func main() {
	http.Handle("/js/", http.FileServer(FileSystem{"/js/", []string{"dist", "bower_components"}}))
	http.Handle("/css/", http.FileServer(FileSystem{"/css/", []string{"bower_components"}}))
	http.HandleFunc("/", loadTestHTML)
	http.ListenAndServe(":8080", nil)
}

func loadTestHTML(w http.ResponseWriter, r *http.Request) {
	htmlTemplates.ExecuteTemplate(w, "test.html", nil)
}
