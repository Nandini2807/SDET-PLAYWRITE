//4. Recursive Navigation Type
// Scenario: You are building a tree structure for a file system or a sidebar menu.
// Task: Define a type FolderNode that has a name: string. It should also have an optional files: string[] and an optional subFolders property, which is an array of FolderNode objects.


type FolderNode = {
    name: string;

    files?: string[];

    subFolders?: FolderNode[];
};

const rootFolder: FolderNode = {
    name: "Root",

    files: ["index.html", "app.ts"],

    subFolders: [
        {
            name: "Documents",

            files: ["resume.pdf", "notes.txt"],

            subFolders: [
                {
                    name: "Images",

                    files: ["photo.png", "logo.jpg"]
                }
            ]
        },

        {
            name: "Music",

            files: ["song.mp3"]
        }
    ]
};

console.log(rootFolder);