<?php

namespace App\Services;

use App\Models\Project;
use Illuminate\Database\Eloquent\Collection;

class ProjectService
{
    public function __construct()
    {
    }

    public function getAll(): Collection
    {
        return Project::all();
    }
}
